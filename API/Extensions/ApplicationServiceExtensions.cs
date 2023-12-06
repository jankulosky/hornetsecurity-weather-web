using API.Interfaces;
using API.Services;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public const string AngularUiOrigins = "_AngularUiOrigins";
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(name: AngularUiOrigins, builder =>
                {
                    var corsDomain = config.GetValue<string>("Cors");
                    builder.WithOrigins("http://localhost:4200", "http://localhost", corsDomain)
                    .WithMethods("GET", "PUT", "POST", "DELETE", "HEAD", "OPTIONS")
                    .AllowAnyHeader()
                    .AllowCredentials();
                });
            });
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IAuthenticationService, AuthenticationService>();

            return services;
        }
    }
}