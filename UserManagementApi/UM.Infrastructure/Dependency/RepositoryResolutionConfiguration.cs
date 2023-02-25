using Microsoft.Extensions.DependencyInjection;
using UM.Domain.IRepository;
using UM.Infrastructure.Repository;

namespace UM.Infrastructure.Dependency
{
    public static class RepositoryResolutionConfiguration
    {
        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IOtpRepository, OtpRepository>();
            services.AddScoped<IUserRepository, UserRepository>();
            services.AddScoped<ICountryRepository, CountryRepository>();
            return services;
        }
    }
}
