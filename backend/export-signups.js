import XLSX from 'xlsx';
import { listSignups } from './db.js';

const rows = listSignups.all();
const worksheet = XLSX.utils.json_to_sheet(rows);
const workbook = XLSX.utils.book_new();

XLSX.utils.book_append_sheet(workbook, worksheet, 'Signups');
XLSX.writeFile(workbook, 'signups.xlsx');

console.log(`Exported ${rows.length} signup records to signups.xlsx`);
