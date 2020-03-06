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
        <Card style={{ margin: "20px", backgroundColor: "#f5f5f5" }} className={classes.root}>
            <CardActionArea>
                <CardMedia
                > {props.img_start}</CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                    <hr></hr>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.equipment}
                    </Typography>
                    <hr></hr>
                    <Typography gutterBottom variant="h4" component="h2">
                        {props.equipment}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
