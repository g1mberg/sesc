using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Text.Json;

namespace sesc.API.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Tour> Tours => Set<Tour>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        var tagsComparer = new ValueComparer<List<string>>(
            (a, b) => a != null && b != null && a.SequenceEqual(b),
            v => v.Aggregate(0, (h, s) => HashCode.Combine(h, s.GetHashCode())),
            v => v.ToList()
        );

        modelBuilder.Entity<Tour>()
            .Property(t => t.Tags)
            .HasConversion(
                v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
                v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions?)null) ?? new List<string>()
            )
            .HasColumnType("nvarchar(max)")
            .Metadata.SetValueComparer(tagsComparer);

        modelBuilder.Entity<Tour>()
            .Property(t => t.CommercialCost).HasPrecision(18, 2);
        modelBuilder.Entity<Tour>()
            .Property(t => t.Cost).HasPrecision(18, 2);
        modelBuilder.Entity<Tour>()
            .Property(t => t.ForOneCommercial).HasPrecision(18, 2);
        modelBuilder.Entity<Tour>()
            .Property(t => t.ForOneRegular).HasPrecision(18, 2);
    }
}
