namespace sesc.API.Data;

public static class DataSeed
{
    public static List<Tour> Tours =
    [
        new Tour
        {
            Id = 1,
            Name = "Passeio de Trem Serra Gaúcha",
            Img = "https://picsum.photos/seed/trem/469/300",
            Status = "Confirmada",
            Description = "Uma viagem inesquecível de trem pela Serra Gaúcha, passando por paisagens deslumbrantes, vinhedos e cidades históricas. Inclui visita a Gramado e Canela, com tempo livre para compras e gastronomia local.",
            Tags = ["Rodoviário", "Nacional"],
            Origin = "Curitiba",
            Destination = "Gramado",
            Date = new DateTime(2025, 11, 15),
            People = 12,
            CommercialCost = 299.90m,
            Cost = 349.90m,
            ForOneCommercial = 299.90m,
            ForOneRegular = 349.90m
        },
        new Tour
        {
            Id = 2,
            Name = "Florianópolis & Praias",
            Img = "https://picsum.photos/seed/floripa/469/300",
            Status = "Confirmada",
            Description = "Conheça as praias paradisíacas de Florianópolis, a Ilha da Magia. O roteiro inclui Praia Mole, Joaquina, Lagoa da Conceição e muito mais. Hospedagem em hotel 3 estrelas com café da manhã incluso.",
            Tags = ["Rodoviário", "Nacional"],
            Origin = "Curitiba",
            Destination = "Florianópolis",
            Date = new DateTime(2025, 12, 5),
            People = 10,
            CommercialCost = 450.00m,
            Cost = 520.00m,
            ForOneCommercial = 450.00m,
            ForOneRegular = 520.00m
        },
        new Tour
        {
            Id = 3,
            Name = "Bonito - Ecoturismo",
            Img = "https://picsum.photos/seed/bonito/469/300",
            Status = "Vagas Limitadas",
            Description = "Explore as maravilhas de Bonito, no Mato Grosso do Sul. Gruta do Lago Azul, Rio da Prata, Buraco das Araras e muito mais. Uma experiência única de ecoturismo em contato com a natureza.",
            Tags = ["Aéreo", "Nacional", "Aventura"],
            Origin = "Curitiba",
            Destination = "Bonito",
            Date = new DateTime(2026, 1, 10),
            People = 8,
            CommercialCost = 1200.00m,
            Cost = 1450.00m,
            ForOneCommercial = 1200.00m,
            ForOneRegular = 1450.00m
        },
        new Tour
        {
            Id = 4,
            Name = "Salvador & Chapada Diamantina",
            Img = "https://picsum.photos/seed/salvador/469/300",
            Status = "Confirmada",
            Description = "Roteiro completo pela Bahia: explore o centro histórico de Salvador, o Pelourinho, e depois mergulhe nas paisagens da Chapada Diamantina com cachoeiras, grutas e trilhas inesquecíveis.",
            Tags = ["Aéreo", "Nacional", "Cultural"],
            Origin = "Londrina",
            Destination = "Salvador",
            Date = new DateTime(2026, 2, 14),
            People = 10,
            CommercialCost = 1890.00m,
            Cost = 2200.00m,
            ForOneCommercial = 1890.00m,
            ForOneRegular = 2200.00m
        },
        new Tour
        {
            Id = 5,
            Name = "Rio de Janeiro - Réveillon 2026",
            Img = "https://picsum.photos/seed/rio/469/300",
            Status = "Vagas Limitadas",
            Description = "Virada de ano no Rio de Janeiro! Pacote especial de Réveillon com hospedagem em Copacabana, ingressos para shows na praia e passeio ao Cristo Redentor e Pão de Açúcar. Uma experiência única!",
            Tags = ["Aéreo", "Nacional"],
            Origin = "Curitiba",
            Destination = "Rio de Janeiro",
            Date = new DateTime(2025, 12, 28),
            People = 12,
            CommercialCost = 2500.00m,
            Cost = 2990.00m,
            ForOneCommercial = 2500.00m,
            ForOneRegular = 2990.00m
        },
        new Tour
        {
            Id = 6,
            Name = "Buenos Aires - Argentina",
            Img = "https://picsum.photos/seed/baires/469/300",
            Status = "Confirmada",
            Description = "Descubra a cosmopolita Buenos Aires: a Recoleta, San Telmo, show de tango, gastronomia argentina e muito mais. Voo direto de Curitiba, hotel 4 estrelas no centro histórico.",
            Tags = ["Aéreo", "Internacional", "Cultural"],
            Origin = "Curitiba",
            Destination = "Buenos Aires",
            Date = new DateTime(2026, 3, 20),
            People = 10,
            CommercialCost = 3200.00m,
            Cost = 3800.00m,
            ForOneCommercial = 3200.00m,
            ForOneRegular = 3800.00m
        }
    ];

    public static List<FilterDef> Filters =
    [
            new FilterDef
            {
                Id = "dates",
                Type = "daterange",
                Label = "Datas",
                TourField = "date"
            },
            new FilterDef
            {
                Id = "originCity",
                Type = "search",
                Label = "Cidade de origem",
                Placeholder = "Digite a cidade...",
                TourField = "origin",
                Options = new List<string> { "Curitiba", "Londrina", "Maringá", "Foz do Iguaçu", "Ponta Grossa" }
            },
            new FilterDef
            {
                Id = "maxCost",
                Type = "number",
                Label = "Valor máximo",
                Placeholder = "Ex: 500",
                Suffix = "R$",
                TourField = "cost"
            },
            new FilterDef
            {
                Id = "sortBy",
                Type = "select",
                Label = "Ordenar por",
                Options = new List<SelectOption>
                {
                    new SelectOption { Value = "price", Label = "Preço" },
                    new SelectOption { Value = "date", Label = "Data" }
                }
            },
            new FilterDef
            {
                Id = "tags",
                Type = "variants",
                Label = "Tipo de Excursão",
                TourField = "tags",
                Options = new List<string> { "Rodoviário", "Aéreo", "Nacional", "Internacional", "Cultural", "Aventura" }
            },
            new FilterDef
            {
                Id = "destination",
                Type = "search",
                Label = "Destino",
                Placeholder = "Digite o destino...",
                TourField = "destination",
                Options = new List<string> { "Gramado", "Florianópolis", "Bonito", "Salvador", "Rio de Janeiro", "São Paulo", "Buenos Aires", "Chapada Diamantina" }
            }
    ];
}
