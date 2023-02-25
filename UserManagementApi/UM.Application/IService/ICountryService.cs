using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.IService
{
    public interface ICountryService
    {
        Task Add(CountryModel country);
        Task<List<CountryViewModel>> GetAll();
        Task<CountryViewModel> GetById(int id);
        Task Update(CountryModel country);
        Task Delete(int id);
    }
}
