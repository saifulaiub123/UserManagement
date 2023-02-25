using Microsoft.AspNetCore.Mvc;
using UM.Application.IService;
using UM.Domain.IEntity;
using UM.Domain.Model;

namespace UM.Api.Controllers
{
    public class CountryController : BaseController
    {
        private readonly ICountryService _countryService;

        public CountryController(ICountryService countryService)
        {
            _countryService = countryService;
        }

        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody] CountryModel country)
        {

            await _countryService.Add(country);
            return Ok();

        }
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _countryService.GetAll();
            return Ok(result);
        }
        [HttpGet("GetById")]
        public async Task<IActionResult> GetById([FromQuery] int id)
        {
            var result = await _countryService.GetById(id);
            return Ok(result);
        }
        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] CountryModel country)
        {
            await _countryService.Update(country);
            return Ok();
        }
        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete([FromQuery] int id)
        {
            await _countryService.Delete(id);
            return Ok();
        }
    }
}
