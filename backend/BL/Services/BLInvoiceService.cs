using Dal.Models;
using Dal.Api;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.Api;

namespace BL.Services
{
    public class BLInvoiceService : IBLInvoice
    {
        private readonly IInvoice _dalInvoice;

        public BLInvoiceService(IInvoice dalInvoice)
        {
            _dalInvoice = dalInvoice;
        }

        public async Task<int> GetSumAsync()
        {
            var allInvoices = await _dalInvoice.GetAllAsync();
            return allInvoices.Count();
        }

        public async Task<int> GetSumByUserIdAsync(int userId)
        {
            var allInvoices = await _dalInvoice.GetAllAsync();
            return allInvoices.Count(i => i.UserId == userId);
        }

        public async Task<IEnumerable<Invoice>> GetAllAsync()
        {
            return await _dalInvoice.GetAllAsync();
        }

        public async Task<IEnumerable<Invoice>> GetAllByUserIdAsync(int userId)
        {
            var allInvoices = await _dalInvoice.GetAllAsync();
            return allInvoices.Where(i => i.UserId == userId);
        }

        public Task<Invoice?> GetByIdAsync(int id) => _dalInvoice.GetByIdAsync(id);
        public Task AddAsync(Invoice invoice) => _dalInvoice.AddAsync(invoice);
        public Task UpdateAsync(Invoice invoice) => _dalInvoice.UpdateAsync(invoice);
        public Task DeleteAsync(int id) => _dalInvoice.DeleteAsync(id);
    }
}