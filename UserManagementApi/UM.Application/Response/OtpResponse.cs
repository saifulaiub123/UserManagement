using UM.Application.Enum;

namespace UM.Application.Response
{
    public class OtpResponse
    {
        public OtpResponse()
        {}

        public OtpResponse(OtpResponseEnum status, string message)
        {
            Status = status;
            Message = message;
        }

        public OtpResponseEnum Status { get; set; }
        public string Message { get; set; }
    }
}
