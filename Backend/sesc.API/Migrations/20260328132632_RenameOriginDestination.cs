using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace sesc.API.Migrations
{
    /// <inheritdoc />
    public partial class RenameOriginDestination : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Origin",
                table: "Tours",
                newName: "To");

            migrationBuilder.RenameColumn(
                name: "Destination",
                table: "Tours",
                newName: "From");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "To",
                table: "Tours",
                newName: "Origin");

            migrationBuilder.RenameColumn(
                name: "From",
                table: "Tours",
                newName: "Destination");
        }
    }
}
