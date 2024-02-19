export const getUniversity = (id) => {
  let response = "";
  switch (id) {
    case 1:
      response = "IITU";
      break;
    case 2:
      response = "Narxoz";
      break;
    default:
      response = "Unknown";
      break;
  }
  return response;
};
