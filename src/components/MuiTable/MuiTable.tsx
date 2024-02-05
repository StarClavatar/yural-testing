import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./MuiTable.css";
import { Detail } from "../../types/detail";

interface TableProps {
  data: Detail[];
  tableHeaders: string[];
  tableName: string;
}

const MuiTable = ({ data, tableHeaders, tableName }: TableProps) => {
  console.log(data && data[0] && data[0].brand === '')
  return (
    
    <TableContainer className="table" component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, idx) => (
              <TableCell sortDirection={"asc"} key={idx}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length ? (
            data.map((row) => (
              <TableRow className="table__row" key={row.goodsID}>
                <TableCell>
                  <a className="table__link">{row.brand}</a>
                </TableCell>
                <TableCell>
                  <a className="table__link" href="">
                    {row.number}
                  </a>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                {tableName === "analogues" ? (
                  <>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.rate}</TableCell>
                    <TableCell>
                      <button className="table__cart">В корзину</button>
                    </TableCell>
                  </>
                ) : (
                  <TableCell sx={{ width: "155px" }}>
                    {data && data[0] && data[0].brand === '' ? 
                    'Ничего не найдено' 
                    :
                    <Link className="table__link" to={`/brands/${row.brand}/${row.number}`}>Цена и аналоги &rarr;</Link>
                    }
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Нет данных</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
