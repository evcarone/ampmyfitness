import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function WorkoutCard(props) {
    const classes = useStyles();

    return (
        <Card style={{ margin: "auto", width: "100%", height: "100%", backgroundColor: "#f5f5f5" }} className={classes.root}>


        <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
                <strong>{props.name}</strong>
            </Typography>
            <hr></hr>
            <Typography gutterBottom variant="h5" component="h2">
                <strong>Equipment Required: </strong>{props.equipment}
            </Typography>

            <hr></hr>

            <Typography gutterBottom variant="h5" component="h2">
                <strong>Description: </strong> {props.description}
            </Typography>

        </CardContent>

        <CardMedia className="container">
            <div className="row">
            <img className="col-md-6" style={{ height: "300px", width: "200px", margin: "auto", display: "block"}} src={props.img_start}></img>

            <img className="col-md-6" style={{ height: "300px", width: "200px", margin: "auto", display: "block"}} src={props.img_end}></img>
            </div>
        </CardMedia>

    </Card>
    );
}
