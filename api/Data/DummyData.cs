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
                    Make = "Dutch Cargo Fluyt",
                    Description = "Landed at Plymouth and got down to business.",
                    LengthInFeet = 85
                },
                new Boat {
                    BoatId = 2,
                    BoatName = "The Bluenose",
                    Picture = "",
                    Make = "Schooner",
                    Description = "The fastest ship in North America",
                    LengthInFeet = 143
                },
                new Boat {
                    BoatId = 3,
                    BoatName = "The Santa Maria",
                    Picture = "",
                    Make = "Carrack",
                    Description = "Cristobal Colon's own ship.",
                    LengthInFeet = 62
                },
                new Boat {
                    BoatId = 4,
                    BoatName = "The Oseberg Ship",
                    Picture = "",
                    Make = "Karves (Longship)",
                    Description = "An ornately decorated Viking Longship",
                    LengthInFeet = 71
                },
                new Boat {
                    BoatId = 5,
                    BoatName = "The USS Midway",
                    Picture = "",
                    Make = "CV-41 Aircraft Carrier",
                    Description = "The first carrier not able to fit through the Panama canal!",
                    LengthInFeet = 1001
                }
            };
        }
    }
}
