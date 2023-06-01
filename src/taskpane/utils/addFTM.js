/* global Excel, console*/

async function addFTM(newFTM) {
  await Excel.run(async (context) => {
    console.log("addFTM started");
    // to use a property of an excel object there are two steps:
    // load the specific property
    // sync() the context before using the property value
    const ftmTable = context.workbook.tables.getItem("FTMdata");
    ftmTable.load("name");
    const headers = ftmTable.getHeaderRowRange();
    headers.load("values");
    await context.sync();
    const headersOrder = headers.values[0];
    console.log("the header values:", headersOrder);

    const mappedFTM = headersOrder.map((header) => {
      console.log("added one element to mappedFTM:", newFTM[header.toLowerCase()]);
      return newFTM[header.toLowerCase()];
    });

    console.log(mappedFTM);
    ftmTable.rows.add(null, [mappedFTM]);
    console.log("new line added to the FTM table");

    ftmTable.getRange().format.autofitColumns();
    ftmTable.getRange().format.autofitRows();

    await context.sync();
    console.log("addFTM finished");
  });
}

export default addFTM;
