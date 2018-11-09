import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cards from '../components/Cards';
import Repeat from 'react-repeat-component';
import { Card } from '@material-ui/core';

const styles = theme => ({
  title: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});



function CenteredGrid(props) {
    const { classes } = props;
    var names = ['Jake', 'Jon', 'Thruster', 'MIA'];
    return (
        <div>
            <h1 className={classes.title}>Projects</h1>
            <Cards />
        </div>

    );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
