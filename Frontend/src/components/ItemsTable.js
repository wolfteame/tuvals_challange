import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState,useEffect } from "react";
import axios from 'axios';

function ItemsTable() {
  
  const [item, setitem] = useState([]);

  useEffect(()=> {
    axios.get('http://localhost:5000/all_items/items').then(res =>  (
      setitem(res.data))
      );
  }, [] );
  
  const style = {
    main: {
      margin: "0 auto",
      width: "40%",
      height: "80%",
      backgroundColor: "#f1faee",
      borderRadius: "15px",
      padding: "10px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
    },
  };


  return (
    <div style={style.main}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item.map((it,index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index +1}</TableCell>
                  <TableCell>{it[1]}</TableCell>
                  <TableCell>{it[2]}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ItemsTable;
