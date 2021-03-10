export default (index) => {
  switch (index) {
    case "BCBA":
      return 0;
    case "NYSE":
      return 1;
    case "NASDAQ":
      return 2;
    default:
      return 0;
  }
};
