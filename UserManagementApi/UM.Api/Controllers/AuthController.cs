using UM.Application.Enum;
using UM.Application.IService;
using UM.Application.Response;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using UM.Api.Authentication;
using UM.Domain.DBModel;
using UM.Domain.Model;
using AutoMapper;
using System.Linq;

namespace UM.Api.Controllers
{
    public class AuthController : BaseController
    {

        private readonly TokenHelper _jwtExt;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<Domain.DBModel.Role> _roleManager;
        private readonly IOtpService _otpService;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;


        public AuthController(
            TokenHelper jwtExt,
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            RoleManager<Domain.DBModel.Role> roleManager, 
            IOtpService otpService,
            IConfiguration configuration,
            IMapper mapper)
        {
            _jwtExt = jwtExt;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _otpService = otpService;
            _configuration = configuration;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register(RegisterModel registerModel)
        {
            var user = new ApplicationUser()
            {
                Name = registerModel.Name,
                SurName = registerModel.SurName,
                Email = registerModel.Email,
                UserName = registerModel.Email,
                PasswordHash = registerModel.Password,
                Status = 1
            };
            var result = await _userManager.CreateAsync(user, registerModel.Password);
            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(x => x.Description).ToList();
                return BadRequest(new AuthResponse(){ Errors = errors });
            }
            await _userManager.AddToRoleAsync(user, Application.Enum.Role.User.ToString());
            return Ok();
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            var result = await _signInManager.PasswordSignInAsync(loginModel.Email, loginModel.Password,true,false);
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            var user = await _userManager.FindByNameAsync(loginModel.Email);

            if (user == null || user.Status == 0) return BadRequest();

            var userRoles = await _userManager.GetRolesAsync(user);

            var token = await _jwtExt.GetToken(user, userRoles);
            return Ok(new LoginResponse()
            {
                Token = token,
                Id = user.Id,
                Name = user.Name,
                Email = user.Email,
                Role = string.Join(",",userRoles.ToList())
            });
        }

    }
}
