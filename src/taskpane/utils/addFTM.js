/* global Excel, console*/

async function addFTM() {
  await Excel.run(async (context) => {
    const ftmTable = context.workbook.tables.getItem("FTM_table");
    // to use a property of an excel object there are two steps:
    // load the specific property
    // sync() the context before using the property value
    ftmTable.load("name");
    await context.sync();
    console.log(ftmTable.name);
  });
}

export default addFTM;
