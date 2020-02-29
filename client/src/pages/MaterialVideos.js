import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'; import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MediaCard from "../components/Card/index"
import API from "../utils/API";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



export default function MaterialVideo() {
    const [yogaVideos, setYogaVideos] = useState([])

    const classes = useStyles();

    useEffect(() => {

        API.getPlaylists()
            .then(res => {
                setYogaVideos(res.data.items)
            })
            .catch(err => console.log(err));
    }, []);
    console.log(yogaVideos)

    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}><strong>Yoga</strong> </Typography> <EmojiPeopleIcon></EmojiPeopleIcon>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 700, overflow: 'auto', justifyContent: "center" }}>
                    <Typography justify="center">
                        {yogaVideos.map(video => (
                            <MediaCard videoId= {video.snippet.resourceId.videoId} title={video.snippet.title}></MediaCard>
                        ))}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography className={classes.heading}> <strong>Running</strong> </Typography><DirectionsRunIcon></DirectionsRunIcon>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 700, overflow: 'auto', justifyContent: "center" }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{ margin: "3px" }} className={classes.heading}> <strong>Cycling</strong> </Typography> <DirectionsBikeIcon ></DirectionsBikeIcon>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 700, overflow: 'auto', justifyContent: "center" }}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

        </div>
    );
}