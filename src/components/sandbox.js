import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Nav2 from '../components/NavBarComp';
import Projects from '../components/Projects';
import Search from '../components/Select';
import Footer from '../components/FooterComp';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function FullWidthGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Nav2 />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Carousel</Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                
                <Search />            
                </Grid>
                <Grid item xs={12} sm={9}>
                <Projects />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    );
}

FullWidthGrid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
