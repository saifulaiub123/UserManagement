
using AutoMapper;
using UM.Application.IService;
using UM.Domain.DBModel;
using UM.Domain.IRepository;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.Service
{
    public class CountryService : ICountryService
    {
        private readonly ICountryRepository _countryRepository;
        private readonly IMapper _mapper;

        public CountryService(ICountryRepository countryRepository, IMapper mapper)
        {
            _countryRepository = countryRepository;
            _mapper = mapper;
        }
        public async Task Add(CountryModel country)
        {
            var result = _mapper.Map<Country>(country); 
            await _countryRepository.Insert(result);
            await _countryRepository.SaveAsync();
        }

        public async Task Delete(int id)
        {
            await _countryRepository.Delete(id);
            await _countryRepository.SaveAsync();
        }

        public async Task<List<CountryViewModel>> GetAll()
        {
            var result = await _countryRepository.GetAll();
            var data = _mapper.Map<List<CountryViewModel>>(result);
            return data;
        }

        public async Task<CountryViewModel> GetById(int id)
        {
            var result = await _countryRepository.GetById(id);
            var data = _mapper.Map<CountryViewModel>(result);
            return data;
        }

        public async Task Update(CountryModel country)
        {
            var existingCountry = await _countryRepository.FindBy(x => x.Id == country.Id);
            if(existingCountry != null)
            {
                existingCountry.Name = country.Name;
                await _countryRepository.Update(existingCountry);
                await _countryRepository.SaveAsync();
            }
        }
    }
}
