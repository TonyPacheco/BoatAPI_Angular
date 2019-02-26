using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class autogenid : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "Name", "NormalizedName" },
                values: new object[] { "Member", "MEMBER" });

            migrationBuilder.UpdateData(
                table: "Boats",
                keyColumn: "BoatId",
                keyValue: 1,
                columns: new[] { "Description", "LengthInFeet", "Make" },
                values: new object[] { "Landed at Plymouth and got down to business.", 85.0, "Dutch Cargo Fluyt" });

            migrationBuilder.UpdateData(
                table: "Boats",
                keyColumn: "BoatId",
                keyValue: 2,
                column: "LengthInFeet",
                value: 143.0);

            migrationBuilder.UpdateData(
                table: "Boats",
                keyColumn: "BoatId",
                keyValue: 3,
                columns: new[] { "Description", "LengthInFeet", "Make" },
                values: new object[] { "Cristobal Colon's own ship.", 62.0, "Carrack" });

            migrationBuilder.InsertData(
                table: "Boats",
                columns: new[] { "BoatId", "BoatName", "Description", "LengthInFeet", "Make", "Picture" },
                values: new object[,]
                {
                    { 4, "The Oseberg Ship", "An ornately decorated Viking Longship", 71.0, "Karves (Longship)", "" },
                    { 5, "The USS Midway", "The first carrier not able to fit through the Panama canal!", 1001.0, "CV-41 Aircraft Carrier", "" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Boats",
                keyColumn: "BoatId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Boats",
                keyColumn: "BoatId",
                keyValue: 5);

            migrationBuilder.UpdateData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2",
                columns: new[] { "Name", "NormalizedName" },
                values: new object[] { "Customer", "CUSTOMER" });

            migrationBuilder.UpdateData(
                table: "Boats",
                keyColumn: "BoatId",
                keyValue: 1,
                columns: new[] { "Description", "LengthInFeet", "Make" },
                values: new object[] { "A large wooden ship", 70.5, "Tallship" });

            migrationBuilder.UpdateData(
                table: "Boats",
                keyColumn: "BoatId",
                keyValue: 2,
                column: "LengthInFeet",
                value: 30.75);

            migrationBuilder.UpdateData(
                table: "Boats",
                keyColumn: "BoatId",
                keyValue: 3,
                columns: new[] { "Description", "LengthInFeet", "Make" },
                values: new object[] { "A medium wooden ship", 67.0, "Wideship" });
        }
    }
}
