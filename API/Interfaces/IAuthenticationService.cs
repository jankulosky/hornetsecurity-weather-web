using API.DTOs;
using API.Entities;

namespace API.Interfaces
{
    public interface IAuthenticationService
    {
        Task<UserDto> Register(RegisterDto registerDto);
        Task<UserDto> Login(LoginDto loginDto);
        Task<bool> UserExists(string email);
    }
}