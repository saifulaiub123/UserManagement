
using Microsoft.AspNetCore.Identity;

namespace UM.Domain.DBModel
{
    public class Role : IdentityRole<int>
    {
        public virtual ICollection<UserRole> UserRoles { get; set; }
    }
}
