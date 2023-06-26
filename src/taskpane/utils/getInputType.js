function getInputType(dataType) {
  switch (dataType) {
    case "money":
      return "number";
    case "date":
      return "date";
    case "number":
      return "number";
    case "percentage":
      return "number";
    case "string":
    default:
      return "text";
  }
}

export default getInputType;
