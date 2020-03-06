import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import arms from "../utils/workoutGroups/arms"

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function Workouts() {

    const classes = useStyles();

    const [armWorkouts, setArmWorkouts] = useState(arms)
    

    return (
        <div className={classes.root} >
            
            <Container>

            <ExpansionPanel>

                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{ margin: "3px" }} className={classes.heading}> <strong>Arms</strong> </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                    <Typography>
                        {armWorkouts.map(workout => (
                            <div>
                            <Card style={{ margin: "auto", width: "700px", height: "600px", backgroundColor: "#f5f5f5" }} className={classes.root}>


                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    <strong>{workout.name}</strong>
                                </Typography>
                                <hr></hr>
                                <Typography gutterBottom variant="h5" component="h2">
                                    <strong>Equipment Required: </strong>{workout.equipment}
                                </Typography>

                                <hr></hr>

                                <Typography gutterBottom variant="h5" component="h2">
                                    <strong>Description: </strong> {workout.description}
                                </Typography>

                            </CardContent>

                            <CardMedia>
                                <img style={{ height: "200px", width: "200px", alignContent: "center"}} src={workout.img_start}></img>

                                <img style={{ height: "200px", width: "200px", justifyContent: "center"}} src={workout.img_end}></img>
                            </CardMedia>

                        </Card>
                        <br></br>
                        </div>
                        ))}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            </Container>
        </div>
    );
}

{/* <Card style={{ margin: "auto", width: "700px", height: "600px", backgroundColor: "#f5f5f5" }} className={classes.root}>


<CardContent>
    <Typography gutterBottom variant="h4" component="h2">
        <strong>{armWorkouts[0].name}</strong>
    </Typography>
    <hr></hr>
    <Typography gutterBottom variant="h5" component="h2">
        <strong>Equipment Required: </strong>{armWorkouts[0].equipment}
    </Typography>

    <hr></hr>

    <Typography gutterBottom variant="h5" component="h2">
        <strong>Description: </strong> {armWorkouts[0].description}
    </Typography>

</CardContent>

<CardMedia>
    <img style={{ height: "200px", width: "200px", alignContent: "center"}} src={armWorkouts[0].img_start}></img>

    <img style={{ height: "200px", width: "200px", justifyContent: "center"}} src={armWorkouts[0].img_end}></img>
</CardMedia>

</Card> */}