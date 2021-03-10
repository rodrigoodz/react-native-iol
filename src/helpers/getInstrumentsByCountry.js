export default (country) => {
  switch (country) {
    case 0:
      // argentina
      return [
        { label: "Acciones", value: "Acciones" },
        { label: "Bonos", value: "Bonos" },
        { label: "Opciones", value: "Opciones" },
      ];
    case 1:
      // estados_unidos
      return [
        {
          label: "Acciones USA",
          value: "Acciones",
        },
      ];
  }
};
