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
        <Card style={{ margin: "auto", width: "75%", height: "100%", backgroundColor: "white", paddingBottom: "25px" }} className={classes.root}>


        <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
                <strong>{props.name}</strong>
            </Typography>
            <hr></hr>
            <Typography gutterBottom variant="h6" component="h2">
                <p style={{ fontSize: "18px"}}><strong>Equipment Required:</strong> {props.equipment}</p>
            </Typography>

            <hr></hr>

            <Typography gutterBottom variant="h6" component="h2">
            <p style={{ fontSize: "16px"}}><strong>Description: </strong> {props.description}</p>
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
