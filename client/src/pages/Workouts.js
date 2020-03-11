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
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';


import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import WorkoutCard from "../components/WorkoutCard/index"
import arms from "../utils/workoutGroups/arms"
import abs from "../utils/workoutGroups/abs"
import back from "../utils/workoutGroups/back"
import chest from "../utils/workoutGroups/chest"
import legs from "../utils/workoutGroups/legs"
import shoulders from "../utils/workoutGroups/shoulders"

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
    const [abWorkouts, setAbWorkouts] = useState(abs)
    const [backWorkouts, setBackWorkouts] = useState(back)
    const [chestWorkouts, setChestWorkouts] = useState(chest)
    const [legWorkouts, setLegWorkouts] = useState(legs)
    const [shoulderWorkouts, setShoulderWorkouts] = useState(shoulders)

    return (
        <div className={classes.root} >

            <Container style={{ marginTop: "50px" }}>

                {/* Arms */}
                <ExpansionPanel style={{background: "#c6ebf8"}}>

                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ margin: "10px" }} className={classes.heading}> <strong>Arms</strong> </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                        <Typography>
                            {armWorkouts.map(workout => (
                                <div>
                                    <WorkoutCard name={workout.name} equipment={workout.equipment} description={workout.description} img_start={workout.img_start} img_end={workout.img_end}></WorkoutCard>
                                    <br></br>
                                </div>
                            ))}
                            
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Back */}
                <ExpansionPanel style={{background: "#c6ebf8"}}>

                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ margin: "10px" }} className={classes.heading}> <strong>Back</strong> </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                        <Typography>
                            {backWorkouts.map(workout => (
                                <div>
                                    <WorkoutCard name={workout.name} equipment={workout.equipment} description={workout.description} img_start={workout.img_start} img_end={workout.img_end}></WorkoutCard>
                                    <br></br>
                                </div>
                            ))}
                            
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Abs */}
                <ExpansionPanel style={{background: "#c6ebf8"}}>

                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ margin: "10px" }} className={classes.heading}> <strong>Abs</strong> </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                        <Typography>
                            {abWorkouts.map(workout => (
                                <div>
                                    <WorkoutCard name={workout.name} equipment={workout.equipment} description={workout.description} img_start={workout.img_start} img_end={workout.img_end}></WorkoutCard>
                                    <br></br>
                                </div>
                            ))}
                            
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                {/* Chest */}
                <ExpansionPanel style={{background: "#c6ebf8"}}>

                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ margin: "10px" }} className={classes.heading}> <strong>Chest</strong> </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                        <Typography>
                            {chestWorkouts.map(workout => (
                                <div>
                                    <WorkoutCard name={workout.name} equipment={workout.equipment} description={workout.description} img_start={workout.img_start} img_end={workout.img_end}></WorkoutCard>
                                    <br></br>
                                </div>
                            ))}
                            
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* Legs */}
                <ExpansionPanel style={{background: "#c6ebf8"}}>

                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ margin: "10px" }} className={classes.heading}> <strong>Legs</strong> </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                        <Typography>
                            {legWorkouts.map(workout => (
                                <div>
                                    <WorkoutCard name={workout.name} equipment={workout.equipment} description={workout.description} img_start={workout.img_start} img_end={workout.img_end}></WorkoutCard>
                                    <br></br>
                                </div>
                            ))}
                            
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                {/* Legs */}
                <ExpansionPanel style={{background: "#c6ebf8"}}>

                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography style={{ margin: "10px" }} className={classes.heading}> <strong>Shoulders</strong> </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                        <Typography>
                            {shoulderWorkouts.map(workout => (
                                <div>
                                    <WorkoutCard name={workout.name} equipment={workout.equipment} description={workout.description} img_start={workout.img_start} img_end={workout.img_end}></WorkoutCard>
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

// {armWorkouts.map(workout => (
//     <div>
//     <Card style={{ margin: "auto", width: "700px", height: "600px", backgroundColor: "#f5f5f5" }} className={classes.root}>


//     <CardContent>
//         <Typography gutterBottom variant="h4" component="h2">
//             <strong>{workout.name}</strong>
//         </Typography>
//         <hr></hr>
//         <Typography gutterBottom variant="h5" component="h2">
//             <strong>Equipment Required: </strong>{workout.equipment}
//         </Typography>

//         <hr></hr>

//         <Typography gutterBottom variant="h5" component="h2">
//             <strong>Description: </strong> {workout.description}
//         </Typography>

//     </CardContent>

//     <CardMedia>
//         <img style={{ height: "200px", width: "200px", alignContent: "center"}} src={workout.img_start}></img>

//         <img style={{ height: "200px", width: "200px", justifyContent: "center"}} src={workout.img_end}></img>
//     </CardMedia>

// </Card>
// <br></br>
// </div>
// ))}