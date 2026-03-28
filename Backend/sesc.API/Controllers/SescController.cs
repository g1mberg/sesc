using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using sesc.API.Data;

namespace sesc.API.Controllers;

[ApiController]
[Route("api")]
public class TourController(AppDbContext db) : ControllerBase
{
    [HttpGet("tours")]
    public async Task<IActionResult> GetTours()
    {
        var tours = await db.Tours.ToListAsync();
        return Ok(tours);
    }

    [HttpGet("tours/{id:int}")]
    public async Task<IActionResult> GetTour(int id)
    {
        var tour = await db.Tours.FindAsync(id);
        if (tour is null)
            return NotFound();
        return Ok(tour);
    }

    [HttpPost("tours")]
    public async Task<IActionResult> CreateTour([FromBody] Tour tour)
    {
        tour.Id = 0;
        db.Tours.Add(tour);
        await db.SaveChangesAsync();
        return CreatedAtAction(nameof(GetTour), new { id = tour.Id }, tour);
    }

    [HttpPut("tours/{id:int}")]
    public async Task<IActionResult> UpdateTour(int id, [FromBody] Tour tour)
    {
        var existing = await db.Tours.FindAsync(id);
        if (existing is null)
            return NotFound();

        tour.Id = id;
        db.Entry(existing).CurrentValues.SetValues(tour);
        await db.SaveChangesAsync();
        return Ok(existing);
    }

    [HttpDelete("tours/{id:int}")]
    public async Task<IActionResult> DeleteTour(int id)
    {
        var tour = await db.Tours.FindAsync(id);
        if (tour is null)
            return NotFound();

        db.Tours.Remove(tour);
        await db.SaveChangesAsync();
        return NoContent();
    }

    [HttpGet("filters")]
    public IActionResult GetFilters()
    {
        return Ok(DataSeed.Filters);
    }
}
