using UM.Application.Response;
using UM.Domain.Model;

namespace UM.Application.IService
{
    public interface IOtpService
    {
        Task SendOtp(string mobileNumber);
        Task<OtpResponse> VerifyOtp(VerifyOtp verifyOtp);
    }
}
