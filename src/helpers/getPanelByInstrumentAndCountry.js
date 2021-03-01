export default (instrument, country) => {
  if (country === 0) {
    switch (instrument) {
      case "Acciones":
        return [
          { label: "Merval", value: "Merval" },
          { label: "Panel General", value: "Panel General" },
          { label: "Merval 25", value: "Merval 25" },
          { label: "Merval Argentina", value: "Merval Argentina" },
          { label: "Burcap", value: "Burcap" },
          { label: "CEDEARs", value: "CEDEARs" },
        ];
      case "Bonos":
        return [
          {
            label: "Todos",
            value: "Todos",
          },
          {
            label: "Soberanos en pesos más Cer",
            value: "Soberanos en pesos más Cer",
          },
          {
            label: "Soberanos en pesos a tasa variable",
            value: "Soberanos en pesos a tasa variable",
          },
          {
            label: "Soberanos en pesos a tasa fija",
            value: "Soberanos en pesos a tasa fija",
          },
          {
            label: "Soberanos en dólares",
            value: "Soberanos en dólares",
          },
          {
            label: "Soberanos dolar linked",
            value: "Soberanos dolar linked",
          },
          {
            label: "Provinciales en pesos",
            value: "Provinciales en pesos",
          },
          {
            label: "Provinciales dolar linked",
            value: "Provinciales dolar linked",
          },
          {
            label: "Provinciales en dólares",
            value: "Provinciales en dólares",
          },
          {
            label: "Provinciales en euros",
            value: "Provinciales en euros",
          },
          {
            label: "Cupones vinculados al PBI",
            value: "Cupones vinculados al PBI",
          },
          {
            label: "Bonos corporativos en pesos",
            value: "Bonos corporativos en pesos",
          },
          {
            label: "Bonos corporativos en dólares",
            value: "Bonos corporativos en dólares",
          },
        ];
      case "Opciones":
        return [
          {
            label: "Todas",
            value: "Todas",
          },
          {
            label: "De Acciones",
            value: "De Acciones",
          },
          {
            label: "De Bonos",
            value: "De Bonos",
          },
          {
            label: "De Cedears",
            value: "De Cedears",
          },
          {
            label: "In-the-Money",
            value: "In-the-Money",
          },
          {
            label: "Out-the-Money",
            value: "Out-the-Money",
          },
          {
            label: "Calls",
            value: "Calls",
          },
          {
            label: "Puts",
            value: "Puts",
          },
        ];
      case "Cauciones":
        return [
          {
            label: "Todas",
            value: "Todas",
          },
        ];
      case "Futuros":
        return [
          {
            label: "Todos",
            value: "Todos",
          },
          {
            label: "Dólar USA",
            value: "Dólar USA",
          },
          {
            label: "MERVAL",
            value: "MERVAL",
          },
          {
            label: "BONAR X",
            value: "BONAR X",
          },
          {
            label: "BONAR 2024",
            value: "BONAR 2024",
          },
          {
            label: "DICA",
            value: "DICA",
          },
          {
            label: "Cupón PBI",
            value: "Cupón PBI",
          },
          {
            label: "Oro",
            value: "Oro",
          },
          {
            label: "Petróleo WTI",
            value: "Petróleo WTI",
          },
          {
            label: "Soja Chicago",
            value: "Soja Chicago",
          },
          {
            label: "Indice Soja Rosafé",
            value: "Indice Soja Rosafé",
          },
          {
            label: "Soja",
            value: "Soja",
          },
          {
            label: "Maíz Chicago",
            value: "Maíz Chicago",
          },
          {
            label: "Maíz",
            value: "Maíz",
          },
          {
            label: "Trigo",
            value: "Trigo",
          },
        ];
      case "FCI":
        return [
          {
            label: "Todos",
            value: "Todos",
          },
          {
            label: "Plazos Fijos Pesos",
            value: "Plazos Fijos Pesos",
          },
          {
            label: "Plazos Fijos Dólares",
            value: "Plazos Fijos Dólares",
          },
          {
            label: "Renta Fija Pesos",
            value: "Renta Fija Pesos",
          },
          {
            label: "Renta Fija Dólares",
            value: "Renta Fija Dólares",
          },
          {
            label: "Renta Mixta Pesos",
            value: "Renta Mixta Pesos",
          },
          {
            label: "Renta Mixta Dólares",
            value: "Renta Mixta Dólares",
          },
          {
            label: "Renta Variable Pesos",
            value: "Renta Variable Pesos",
          },
          {
            label: "Renta Variable Dólares",
            value: "Renta Variable Dólares",
          },
        ];
      default:
        return [];
    }
  } else if (country === 1) {
    switch (instrument) {
      case "Acciones":
        return [
          {
            label: "Dow Jones Industrial",
            value: "Dow Jones Industrial",
          },
          {
            label: "Dow Jones Transportation",
            value: "Dow Jones Transportation",
          },
          {
            label: "Dow Jones Utilities",
            value: "Dow Jones Utilities",
          },
          {
            label: "Nasdaq 100",
            value: "Nasdaq 100",
          },
          {
            label: "SP100",
            value: "SP100",
          },
          {
            label: "SP500",
            value: "SP500",
          },
          {
            label: "SP500 Value",
            value: "SP500 Value",
          },
          {
            label: "SP500 Growth",
            value: "SP500 Growth",
          },
          {
            label: "SP400 MidCap",
            value: "SP400 MidCap",
          },
          {
            label: "SP400 MidCap Value",
            value: "SP400 MidCap Value",
          },
          {
            label: "S400 MidCap Growth",
            value: "S400 MidCap Growth",
          },
          {
            label: "SP600 SmallCap",
            value: "SP600 SmallCap",
          },
          {
            label: "SP600 SmallCap Value",
            value: "SP600 SmallCap Value",
          },
          {
            label: "SP600 SmallCap Growth",
            value: "SP600 SmallCap Growth",
          },
          {
            label: "SP500 Dividendos",
            value: "SP500 Dividendos",
          },
          {
            label: "ADRs",
            value: "ADRs",
          },
        ];
      case "Bonos":
        return [
          {
            label: "Soberanos en pesos más Cer",
            value: "Soberanos en pesos más Cer",
          },
          {
            label: "Soberanos en pesos a tasa variable",
            value: "Soberanos en pesos a tasa variable",
          },
          {
            label: "Soberanos en pesos a tasa fija",
            value: "Soberanos en pesos a tasa fija",
          },
          {
            label: "Soberanos en dólares",
            value: "Soberanos en dólares",
          },
          {
            label: "Soberanos dolar linked",
            value: "Soberanos dolar linked",
          },
          {
            label: "Provinciales en pesos",
            value: "Provinciales en pesos",
          },
          {
            label: "Provinciales dolar linked",
            value: "Provinciales dolar linked",
          },
          {
            label: "Provinciales en dólares",
            value: "Provinciales en dólares",
          },
          {
            label: "Provinciales en euros",
            value: "Provinciales en euros",
          },
          {
            label: "Cupones vinculados al PBI",
            value: "Cupones vinculados al PBI",
          },
          {
            label: "Bonos corporativos en pesos",
            value: "Bonos corporativos en pesos",
          },
          {
            label: "Bonos corporativos en dólares",
            value: "Bonos corporativos en dólares",
          },
        ];
      case "Etfs":
        return [
          {
            label: "Todos",
            value: "Todos",
          },
          {
            label: "Acciones Desarrollados",
            value: "Acciones Desarrollados",
          },
          {
            label: "Acciones Emergentes",
            value: "Acciones Emergentes",
          },
          {
            label: "Acciones Financieras",
            value: "Acciones Financieras",
          },
          {
            label: "Acciones Energéticas",
            value: "Acciones Energéticas",
          },
          {
            label: "Acciones Tecnológicas",
            value: "Acciones Tecnológicas",
          },
          {
            label: "Acciones Consumo Básico",
            value: "Acciones Consumo Básico",
          },
          {
            label: "Acciones Consumo Durable",
            value: "Acciones Consumo Durable",
          },
          {
            label: "Acciones Salud",
            value: "Acciones Salud",
          },
          {
            label: "Acciones Industriales",
            value: "Acciones Industriales",
          },
          {
            label: "Acciones Materiales",
            value: "Acciones Materiales",
          },
          {
            label: "Acciones Servicios Básicos",
            value: "Acciones Servicios Básicos",
          },
          {
            label: "Bonos",
            value: "Bonos",
          },
          {
            label: "Commodities",
            value: "Commodities",
          },
          {
            label: "Monedas",
            value: "Monedas",
          },
          {
            label: "Inmuebles",
            value: "Inmuebles",
          },
          {
            label: "Estrategias Avanzadas",
            value: "Estrategias Avanzadas",
          },
          {
            label: "Apalancados Alcistas",
            value: "Apalancados Alcistas",
          },
          {
            label: "Apalancados Bajistas",
            value: "Apalancados Bajistas",
          },
        ];
      case "Monedas":
        return [
          {
            label: "Principales divisas",
            value: "Principales divisas",
          },
          {
            label: "Otras divisas",
            value: "Otras divisas",
          },
        ];
      default:
        return [];
    }
  }
};
