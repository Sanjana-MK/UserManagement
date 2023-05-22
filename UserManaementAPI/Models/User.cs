using System.ComponentModel.DataAnnotations;
namespace UserManaementAPI.Models
{
    public class User
    {
        
        public Guid Id { get;set;}
        public string Name { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public string Location { get; set; }

    }
}
