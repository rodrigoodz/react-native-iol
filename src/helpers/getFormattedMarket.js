export default (market) => {
  switch (market) {
    case 0:
      return "bCBA";
      break;
    case 1:
      return "nyse";
    case 2:
      return "nasdaq";
    case 3:
      return "amex";
    case 4:
      return "bcs";
    case 5:
      return "rofx";
    default:
      return "";
  }
};
