using System.Text.Json.Serialization;

namespace sesc.API.Data;

public class Tour
{
    [JsonIgnore(Condition = JsonIgnoreCondition.WhenWritingDefault)]
    public int Id { get; set; }
    public string Name { get; set; } = "";
    public string Img { get; set; } = "";
    public string Status { get; set; } = "";
    public string Description { get; set; } = "";
    public List<string> Tags { get; set; } = [];
    public string From { get; set; } = "";
    public string To { get; set; } = "";
    public DateTime Date { get; set; }
    public int People { get; set; }
    public decimal CommercialCost { get; set; }
    public decimal Cost { get; set; }
    public decimal ForOneCommercial { get; set; }
    public decimal ForOneRegular { get; set; }
}
