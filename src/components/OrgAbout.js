import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import LinearProgress from '@material-ui/core/LinearProgress';
import imgsrc from '../Images/WordMash.png'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  images: {
    height:'90%',
    width:'100%',
  }
});


function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}><img className={classes.images} src={imgsrc} alt='test' /></Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <h1>Mission</h1>
          <p>
            Inter-Faith Food Shuttle pioneers innovative, transformative solutions designed to end hunger in our community.
            Inter-Faith Food Shuttle is a nonpartisan, 501c3 non-profit organization and a member of the Feeding America National Network of Food Banks.
            As a Feeding America Food Bank, we recover and distribute food to our low-income neighbors, but we know putting food on a plate is not enough. We also provide programs designed to empower people with skills to meet their own food needs through culinary job training, beginner gardening, and cooking healthy on a budget. We feed, teach, and grow to create a hunger-free and healthy community.
          </p>
          <Chip
            icon={<FaceIcon />}
            label="10 Backers"
            clickable
            className={classes.chip}
            color="primary"
            variant="outlined"
          />
          <p>50% of item recieved</p>
          <LinearProgress variant="determinate" value={50} />
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
