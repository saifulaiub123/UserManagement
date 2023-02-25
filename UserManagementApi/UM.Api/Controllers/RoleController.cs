using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UM.Application.Enum;
using UM.Application.Response;
using UM.Domain.DBModel;
using UM.Domain.Model;

namespace UM.Api.Controllers
{
    [Authorize]
    public class RoleController : BaseController
    {
        private readonly RoleManager<Domain.DBModel.Role> _roleManager;
        public RoleController(RoleManager<Domain.DBModel.Role> roleManager) 
        { 
            _roleManager= roleManager;
        }

        [HttpGet]
        [Route("GetRoles")]
        public async Task<IActionResult> GetRoles()
        {
            var roles = await _roleManager.Roles.ToListAsync();
            return Ok(roles);
        }
    }
}
