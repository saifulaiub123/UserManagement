using AutoMapper;
using UM.Domain.DBModel;
using UM.Domain.ViewModel;

namespace UM.Domain.Mapping
{
    public class OtpMapping : Profile
    {
        public OtpMapping()
        {
            CreateMap<OtpViewModel,Otp>()
                .ReverseMap();
        }
    }
}
