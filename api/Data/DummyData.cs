using api.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Data
{
    public class DummyData
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<ApplicationDbContext>();
                context.Database.EnsureCreated();
                //context.Database.Migrate();

                // Look for any boats
                if (context.Boats != null && context.Boats.Any())
                    return;   // DB has already been seeded

                var boats = DummyData.GetBoats().ToArray();
                context.Boats.AddRange(boats);
                context.SaveChanges();
            }
        }

        public static List<Boat> GetBoats()
        {
            return new List<Boat>()
            {
                new Boat {
                    BoatId = 1,
                    BoatName = "The Mayflower",
                    Picture = "",
                    Make = "Tallship",
                    Description = "A large wooden ship",
                    LengthInFeet = 70.5
                },
                new Boat {
                    BoatId = 2,
                    BoatName = "The Bluenose",
                    Picture = "",
                    Make = "Schooner",
                    Description = "The fastest ship in North America",
                    LengthInFeet = 30.75
                },
                new Boat {
                    BoatId = 3,
                    BoatName = "The Santa Maria",
                    Picture = "",
                    Make = "Wideship",
                    Description = "A medium wooden ship",
                    LengthInFeet = 67
                }
            };
        }
    }
}
