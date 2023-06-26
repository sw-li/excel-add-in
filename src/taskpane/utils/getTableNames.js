/* global Excel */

async function getTableNames() {
  return Excel.run(async (context) => {
    const tables = context.workbook.tables;
    tables.load("items/name");
    await context.sync();
    const tableNames = tables.items.map((table) => table.name);
    return tableNames;
  });
}

export default getTableNames;
