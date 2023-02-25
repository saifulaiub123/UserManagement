using AutoMapper;
using UM.Domain.DBModel;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Domain.Mapping
{
    public class CountryMapping : Profile
    {
        public CountryMapping()
        {
            CreateMap<Country, CountryModel>()
                .ReverseMap();
            CreateMap<Country, CountryViewModel>()
                .ReverseMap();
        }
    }
}
