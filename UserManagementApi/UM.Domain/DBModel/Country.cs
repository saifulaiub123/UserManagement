
using UM.Domain.Model;

namespace UM.Domain.DBModel
{
    public class Country : BaseModel<int>
    {
        public string Name { get; set; }
    }
}
