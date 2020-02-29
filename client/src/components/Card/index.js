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

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card style={{ margin: "20px", backgroundColor: "#f5f5f5" }} className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                    > <iframe id="ytplayer" type="text/html" width="100%" height="360"
                                        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
                                        frameborder="0"></iframe></CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {props.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
  );
}
