import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
noSpace: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
   stickyFooter: {
    position:'adsolute',
    width: '100%',
    bottom: '0',
    left: '0',
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: 'White',
    background: '#3f51b5',
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
         <Paper className={classes.stickyFooter}>
         Footer
         </Paper>
        </Grid>
     </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
