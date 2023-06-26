/* global Excel */

async function getTableColumns(tableName) {
  return Excel.run(async (context) => {
    const table = context.workbook.tables.getItem(tableName);
    const tableData = table.getDataBodyRange().load("values");
    await context.sync();

    const columnNames = tableData.values[0]; // Assuming first row contains column names
    const columnData = tableData.values.slice(1); // Data starts from the second row

    const columnDetails = await Promise.all(
      columnNames.map(async (columnName, index) => {
        const columnValues = columnData.map((row) => row[index]);
        const dataType = determineDataType(columnValues); // You need to write this function based on your needs
        const validationRule = await determineValidationRule(context, tableName, columnName); // Pass the Excel context to the function
        return {
          columnName,
          dataType,
          validationRule,
        };
      })
    );
    return columnDetails;
  });
}

export default getTableColumns;

function determineDataType(columnValues) {
  // Filter out any null or undefined values
  const nonNullValues = columnValues.filter((value) => value !== null && value !== undefined);

  // If there are no non-null values, return 'unknown'
  if (nonNullValues.length === 0) return "unknown";

  // Determine the type of the first non-null value
  const firstValue = nonNullValues[0];
  if (typeof firstValue === "string") {
    // Check for specific string patterns that might indicate a certain type
    if (/^\d+(,\d{3})*(\,\d{2})?€$/.test(firstValue)) return "money"; // Money pattern: digits, possibly separated by commas, followed by a comma and two digits, ending with a euro sign
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(firstValue)) return "date"; // Date pattern: DD/MM/YYYY
    if (/^\d+%$/.test(firstValue)) return "percentage"; // Percentage pattern: digits followed by a percent sign
    return "string";
  }
  if (typeof firstValue === "number") return "number";
  if (firstValue instanceof Date) return "date";

  // Add more conditions as needed...

  // If none of the conditions match, return 'unknown'
  return "unknown";
}

async function determineValidationRule(context, tableName, columnName) {
  const table = context.workbook.tables.getItem(tableName);
  const column = table.columns.getItem(columnName);
  const dataRange = column.getDataBodyRange();

  // Load the data validation rule of the first cell in the column
  const firstCell = dataRange.getCell(0, 0);
  firstCell.load("dataValidations/items");
  await context.sync();

  const dataValidation = firstCell.dataValidations.items[0];

  if (!dataValidation) {
    return null;
  }

  // Return the details of the data validation rule
  return {
    type: dataValidation.type,
    formula1: dataValidation.formula1,
    formula2: dataValidation.formula2,
    operator: dataValidation.operator,
    showErrorMessage: dataValidation.showErrorMessage,
    showErrorAlert: dataValidation.showErrorAlert,
  };
}
