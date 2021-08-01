import { makeStyles, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, TablePagination } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
  root: {
    width: '90%',
    margin: '50px auto'
  },
  container: { maxHeight: '100%' }
});

export default function TableView (props) {
  const columns = props.columns;
  const rows = props.rows;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) =>  setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return <Paper className={classes.root}>
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label='table'>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{minWidth: column.minWidth}}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
              {columns.map(column => {
                const value = row[column.id];
                return <TableCell key={column.id} align={column.align}>
                  {column.format && typeof value === 'number' ? column.format(value) : value}
                </TableCell>
              })}
            </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[10, 25, 100]}
      component='div'
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  </Paper>
}
 