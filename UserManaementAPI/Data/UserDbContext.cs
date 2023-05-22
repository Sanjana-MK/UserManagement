using Microsoft.EntityFrameworkCore;
using UserManaementAPI.Models;

namespace UserManaementAPI.Data
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
    }
}
