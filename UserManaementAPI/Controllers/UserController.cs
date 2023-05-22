using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserManaementAPI.Data;
using UserManaementAPI.Models;

namespace UserManaementAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UserController : Controller
    {
        private readonly UserDbContext _userDbContext;

        public UserController(UserDbContext userDbContext)
        {
            _userDbContext = userDbContext;
        }
        [HttpGet]
        [Route("GetAllUsers")]

        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userDbContext.Users.ToListAsync();
            return Ok(users); 
        }
        [HttpPost]
        [Route("AddUser")]
        public async Task<IActionResult> AddUser([FromBody]User user)
        {
                user.Id= Guid.NewGuid();
                await _userDbContext.Users.AddAsync(user);
                await _userDbContext.SaveChangesAsync();
                return Ok(user);
        }
        [HttpGet]
        [Route("GetUser/{id:Guid}")]

        public async Task<IActionResult> GetUser([FromRoute] Guid id)
        {
            var users = await _userDbContext.Users.FirstOrDefaultAsync(x=>x.Id==id);
            if (users == null)
            { return NotFound(); }
            else
            {
                return Ok(users);
            }
        }
        [HttpDelete]
        [Route("DeleteUser/{id:Guid}")]
        public async Task<IActionResult> DeleteUser([FromRoute] Guid id)
        {
            var user = await _userDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            if(user != null)
            {
                 _userDbContext.Users.Remove(user); 
                await _userDbContext.SaveChangesAsync();
                return Ok(user);
            }
            else
            {
                return NotFound();
            }
        }
        [HttpPut]
        [Route("UpdateUser/{id:Guid}")]
        public async Task<IActionResult> UpdateUser([FromRoute] Guid id, User updateuserreq)
        {
            var user = await _userDbContext.Users.FirstOrDefaultAsync(x => x.Id == id);
            if (user != null)
            {
                user.Name = updateuserreq.Name;
                user.Email = updateuserreq.Email;
                user.Phone = updateuserreq.Phone;
                user.Location = updateuserreq.Location;
                await _userDbContext.SaveChangesAsync();
                return Ok(user);
            }
            else
            {
                return NotFound();
            }
        }

    }
}
