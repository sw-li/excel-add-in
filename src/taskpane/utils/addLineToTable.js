/* global Excel, console*/

async function addLineToTable(tableName, newLine) {
  await Excel.run(async (context) => {
    console.log("addLineToTable started");
    // to use a property of an excel object there are two steps:
    // load the specific property
    // sync() the context before using the property value
    const targetTable = context.workbook.tables.getItem(tableName);
    targetTable.load("name");
    const headers = targetTable.getHeaderRowRange();
    headers.load("values");
    await context.sync();
    const headersOrder = headers.values[0];
    const mappedLine = headersOrder.map((header) => {
      console.log("added one element to mappedLine:", newLine[header.toLowerCase()]);
      return newLine[header.toLowerCase()];
    });

    console.log(mappedLine);
    targetTable.rows.add(null, [mappedLine]);

    targetTable.getRange().format.autofitColumns();
    targetTable.getRange().format.autofitRows();

    await context.sync();
    console.log("addLineToTable finished");
  });
}

export default addLineToTable;
