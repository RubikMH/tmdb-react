function HandelHead(titel) {
  let result = titel.split("/");

  switch (result[1]) {
    case "search":
      return result[2];
    case "movie":
      return result[1];

    default:
      break;
  }
}
export default HandelHead;
