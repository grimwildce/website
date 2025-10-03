import TableComponent from "@/components/ui/Table/Table";
import TableBody from "@/components/ui/Table/TableBody";
import TableCell from "@/components/ui/Table/TableCell";
import TableHead from "@/components/ui/Table/TableHead";
import TableHeaderCell from "@/components/ui/Table/TableHeaderCell";
import TableRow from "@/components/ui/Table/TableRow";

const Table = Object.assign(TableComponent, {
  Body: TableBody,
  Cell: TableCell,
  Head: TableHead,
  HeaderCell: TableHeaderCell,
  Row: TableRow
});

export default Table;
