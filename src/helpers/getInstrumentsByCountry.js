export default (country) => {
  switch (country) {
    case 0:
      // argentina
      return [
        { label: "Acciones", value: "Acciones" },
        { label: "Bonos", value: "Bonos" },
        { label: "Opciones", value: "Opciones" },
        { label: "Cauciones", value: "Cauciones" },
        { label: "Futuros", value: "Futuros" },
        { label: "FCI", value: "FCI" },
      ];
    case 1:
      // estados_unidos
      return [
        {
          label: "Acciones USA",
          value: "Acciones",
        },
        // {
        //   label: "ADRs",
        //   value: "ADRs",
        // },
        {
          label: "Etfs",
          value: "Etfs",
        },
        {
          label: "Monedas",
          value: "Monedas",
        },
      ];
  }
};
