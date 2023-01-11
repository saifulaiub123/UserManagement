using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using UM.Domain.DBModel;
using UM.Domain.IEntity;

namespace UM.Infrastructure.DBContext
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser, UserRole, int>
    {
        private ICurrentUser _currentUser;
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options, ICurrentUser currentUser) : base(options)
        {
            _currentUser = currentUser;
        }

        public DbSet<Otp> Otps { get; set; }
        public DbSet<ApplicationUser> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(typeof(ApplicationDbContext).Assembly);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //optionsBuilder.EnableSensitiveDataLogging()
            //    .LogTo(Console.WriteLine);
        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {

            foreach (var item in ChangeTracker.Entries<IAuditable>())
            {
                switch (item.State)
                {
                    case EntityState.Added:
                        item.Entity.DateCreated = DateTime.Now;
                        item.Entity.CreatedBy = item.Entity.CreatedBy != 0 ? item.Entity.CreatedBy : _currentUser.User.Id;
                        break;
                    case EntityState.Modified:
                        item.Entity.LastUpdated = DateTime.Now;
                        item.Entity.UpdatedBy = item.Entity.UpdatedBy != null ? item.Entity.UpdatedBy : _currentUser.User.Id;
                        break;
                }
            }

            return base.SaveChangesAsync(cancellationToken);
        }
    }
}