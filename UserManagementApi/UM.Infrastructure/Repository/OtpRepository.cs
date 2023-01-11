using Microsoft.EntityFrameworkCore;
using UM.Domain.DBModel;
using UM.Domain.IRepository;
using UM.Infrastructure.DBContext;

namespace UM.Infrastructure.Repository
{
    public class OtpRepository : Repository<Otp, int>, IOtpRepository
    {
        private readonly ApplicationDbContext _context;
        public OtpRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<Otp> GetLatestOtp(string mobileNumber)
        {
            try
            {
                return await _context.Otps.Where(x => x.MobileNumber == mobileNumber)
                    .OrderByDescending(x => x.DateCreated)
                    .FirstOrDefaultAsync();
            }
            catch (Exception e)
            {
                throw;
            }
        }
    }
}
