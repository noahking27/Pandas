import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const styles = theme => ({
    control: {
        padding: theme.spacing.unit * 2,
    },
    card: {
        maxWidth: 400,
    },
    chip: {
        margin: theme.spacing.unit,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
        [theme.breakpoints.up('sm')]: {
            marginRight: -8,
        },
        
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class RecipeReviewCard extends React.Component {
    state = {
        spacing: '16',
      };

      handleChange = key => (event, value) => {
        this.setState({
          [key]: value,
        });
      };   

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };


    constructor(props) {
        super(props);
        this.state = {
            DATA: [
                { id: 1, title: 'Lorem ipsum dolor sit amet, everti rationibus his cu', views: '200', comments: '9', published: '4h ago', image: '../img/img1.jpeg' },

                { id: 2, title: 'Lorem ipsum dolor sit amet, everti rationibus his ', Views: '700', comments: '16', published: '9h ago', image: '../img/img1.jpeg' },

                { id: 3, title: 'Lorem ipsum dolor sit amet, everti rationibus hi', Views: '698', comments: '8', published: '14h ago', image: '../img/img1.jpeg' },
            ],
        }
    }
    // constructor() {
    //     super();
    //     this.state = {items: []}
    //   }
    //   componentWillMount(){
    //     fetch('http://swapi.co/api/people/?format=json')
    //     .then( response => response.json() )
    //     .then( ({results: items}) => this.setState({items}))
    //   }

    render() {
        const { classes } = this.props;
        const { spacing } = this.state;
        let items = this.state.DATA;
        console.log(items);
        return (
            <Grid container className={classes.root} spacing={16}>
                {this.state.DATA.map((item, index) => {
                    return (                     
                        <Grid>
                          <Grid container className={classes.control} justify="center" spacing={Number(spacing)}>
                        <Card key={index} className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Chip label="Type" className={classes.chip} variant="outlined" />
                                }
                                action={
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={item.id}
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/paella.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
                            </CardContent>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton aria-label="Add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="Share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton
                                    className={classnames(classes.expand, {
                                        [classes.expandOpen]: this.state.expanded,
                                    })}
                                    onClick={this.handleExpandClick}
                                    aria-expanded={this.state.expanded}
                                    aria-label="Show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                        minutes.
            </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                        chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                                        salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                        minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat
                                        to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and
                                        cook again without stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don’t open.)
            </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
            </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                        </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        );
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
