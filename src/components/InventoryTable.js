import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#D8D8D8',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'rgba(	236, 236, 236, 0.5)',
    },
  },
});

let id = 0;
function createData(name, QuantityN , Pledge, QuantityR) {
  id += 1;
  return { id, name, QuantityN , Pledge, QuantityR};
}

const rows = [
  createData('Applesauce', 159, 6.0, 24),
  createData('Canned Beans', 237, 9.0, 37),
  createData('Canned Chicken', 262, 16.0, 24),
  createData('Granola Bars', 305, 3.7, 67),
  createData('Instant Mashed Potatoes', 356, 16.0, 49),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Items Description</CustomTableCell>
            <CustomTableCell numeric>Quantity Needed</CustomTableCell>
            <CustomTableCell numeric>Pledge</CustomTableCell>
            <CustomTableCell numeric>Quantity Recieved</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  {row.name}
                </CustomTableCell>
                <CustomTableCell numeric>{row.QuantityN}</CustomTableCell>
                <CustomTableCell numeric>{row.Pledge}</CustomTableCell>
                <CustomTableCell numeric>{row.QuantityR}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
