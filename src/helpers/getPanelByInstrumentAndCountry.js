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
            label: "Nasdaq 100",
            value: "Nasdaq 100",
          },
          {
            label: "SP500",
            value: "SP500",
          },
        ];

      default:
        return [];
    }
  }
};
