using Microsoft.AspNetCore.Identity;

namespace UM.Domain.DBModel
{
    public class ApplicationUser : IdentityUser<int>
    {
        public int Status { get; set; }
        public string Name { get; set; }
        public string SurName { get; set; }
    }
}
