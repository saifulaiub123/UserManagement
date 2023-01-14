using UM.Domain.DBModel;
using UM.Domain.ViewModel;

namespace UM.Domain.IRepository
{
    public interface IUserRepository
    {
        Task<ApplicationUser> GetUserById(int id);
        Task DeleteUserRole(UserRole userRole);
        Task AddUserRole(UserRole userRole);
        Task UpdateUserRole(UserRole userRole);
        //Task UpdateUser(ApplicationUser user);
    }
}
