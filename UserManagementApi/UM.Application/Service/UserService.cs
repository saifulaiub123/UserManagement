using AutoMapper;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Transactions;
using UM.Application.IService;
using UM.Domain.DBModel;
using UM.Domain.IRepository;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.Service
{
    public class UserService : IUserService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public UserService(IUserRepository userRepository, IMapper mapper, UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
            _userRepository = userRepository;
            _mapper = mapper;
        }

        public async Task<UserViewModel> GetUserById(int id)
        {
            var user = await _userRepository.GetUserById(id);
            var result = _mapper.Map<UserViewModel>(user);

            return result;
        }

        public async Task UpdateUser(UserModel user)
        {
            //using (var scope = new TransactionScope())
            //{
            var exist = await _userRepository.GetUserById(user.Id);
            if (exist != null)
            {
                exist.Name = user.Name;
                exist.PhoneNumber = user.PhoneNumber;
                foreach (var existUserRole in exist.UserRoles)
                {
                    if (!user.Roles.Any(x => x == existUserRole.RoleId))
                    {
                        await _userRepository.DeleteUserRole(existUserRole);
                    }
                }
                foreach (var updateRole in user.Roles)
                {
                    if (!exist.UserRoles.Any(x => x.RoleId == updateRole))
                    {
                        await _userRepository.AddUserRole(new UserRole() { UserId = user.Id, RoleId = updateRole });
                    }
                }
            }
            _ = await _userManager.UpdateAsync(exist);
            //}
        }
    }
}
