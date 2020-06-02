import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import chest from "../../utils/workoutGroups/chest"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LoggedInButtonAppBar from "../../components/LoggedInButtonAppBar/index"

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        position: 'relative',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        opacity: "90%",
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[600],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [chestWorkouts, setChestWorkouts] = useState(chest)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <LoggedInButtonAppBar></LoggedInButtonAppBar>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {chestWorkouts.map(workout => (
                        <Grid xs={12} sm={12} md={6}>
                            <Card className={classes.card} style={{ border: "black solid 5px", borderRadius: "25px" }}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="Workout Group Initial" className={classes.avatar}>
                                            {workout.number}
          </Avatar>
                                    }
                                    title={workout.name}
                                    subheader={workout.equiptment}
                                />
                                <Container style={{ width: "70%", paddingTop: "20px", textAlign: "center" }}>
                                    <Grid container spacing={4}>
                                        <Grid xs={6} sm={6} md={6}>
                                            <img style={{ width: "120px", height: "150px" }} src={workout.img_start} alt="Start Image"></img>
                                        </Grid>
                                        <Grid xs={6} sm={6} md={6}>
                                            <img style={{ width: "120px", height: "150px" }} src={workout.img_end} alt="Finish Image"></img>
                                        </Grid>
                                    </Grid>
                                </Container>
                                <CardActions disableSpacing>
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent style={{ textAlign: "center", fontSize: "12px" }}>
                                        {workout.description}
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </Grid>
                    ))
                    }
                </Grid>
            </Container>
        </div>
    );
}