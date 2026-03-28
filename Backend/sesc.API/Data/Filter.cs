namespace sesc.API.Data;

public class SelectOption
{
    public string Value { get; set; } = "";
    public string Label { get; set; } = "";
}

public class FilterDef
{
    public string Id { get; set; } = "";
    public string Type { get; set; } = "";
    public string Label { get; set; } = "";
    public string? TourField { get; set; }
    public string? Placeholder { get; set; }
    public string? Suffix { get; set; }
    public object? Options { get; set; }
}

