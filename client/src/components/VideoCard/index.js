import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <div style={{ paddingTop: "30px" }}>
            <iframe id="ytplayer" type="text/html" width="90%" height="360"
                src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
                frameborder="0"></iframe>
            <Typography style={{ marginTop: "10px" }} gutterBottom variant="h5" component="h2">
                {props.title}
            </Typography>
            <Divider style={{ marginTop: "15px" }}></Divider>
        </div>
    );
}
