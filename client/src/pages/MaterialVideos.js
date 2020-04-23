import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import TransferWithinAStationIcon from '@material-ui/icons/TransferWithinAStation';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike'; 
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import API from "../utils/API";
import MediaCard from "../components/VideoCard/index";

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
    const [runningVideos, setRunningVideos] = useState([])
    const [HIITVideos, setHIITVideos] = useState([])
    const [cyclingVideos, setCyclingVideos] = useState([])
    const [pilatesVideos, setPilatesVideos] = useState([])

    const classes = useStyles();

    useEffect(() => {

        API.getYogaPlaylists()
            .then(res => {
                setYogaVideos(res.data.items)
            })
            .catch(err => console.log(err));

        API.getRunningPlaylists()
            .then(res => {
                setRunningVideos(res.data.items)
            })
            .catch(err => console.log(err));

        API.getHIITPlaylists()
            .then(res => {
                setHIITVideos(res.data.items)
            })
            .catch(err => console.log(err));

        API.getCyclingPlaylists()
            .then(res => {
                setCyclingVideos(res.data.items)
            })
            .catch(err => console.log(err));

        API.getPilatesPlaylists()
            .then(res => {
                setPilatesVideos(res.data.items)
            })
            .catch(err => console.log(err));
    }, []);

    
    return (
        <div className={classes.root} >

<Container style={{ marginTop: "50px", opacity: ".9" }} >
            {/* Yoga */}
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography style={{ margin: "10px", fontSize: "18px" }} className={classes.heading}><strong>Yoga&nbsp;&nbsp;</strong><EmojiPeopleIcon style={{ fontSize: 25 }}/> </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 600, overflow: 'auto', justifyContent: "center" }}>
                    <Typography justify="center">
                        {yogaVideos.map(video => (
                            <MediaCard videoId={video.snippet.resourceId.videoId} title={video.snippet.title}></MediaCard>
                        ))}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* Running */}
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{ margin: "10px", fontSize: "18px" }} className={classes.heading}> <strong>Running&nbsp;&nbsp;</strong><DirectionsRunIcon style={{ fontSize: 25 }}/></Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                    <Typography>
                        {runningVideos.map(video => (
                            <MediaCard videoId={video.snippet.resourceId.videoId} title={video.snippet.title}></MediaCard>
                        ))}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* High Intensity Interval Training */}
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header" 
                >
                    <Typography style={{ margin: "10px", fontSize: "18px" }}  className={classes.heading}> <strong>High Intensity Interval Training&nbsp;&nbsp;</strong><TransferWithinAStationIcon style={{ fontSize: 25 }}/></Typography> 
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                    <Typography>
                        {HIITVideos.map(video => (
                            <MediaCard videoId={video.snippet.resourceId.videoId} title={video.snippet.title}></MediaCard>
                        ))}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* Cycling */}
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{ margin: "10px", fontSize: "18px" }}  className={classes.heading}> <strong>Cycling&nbsp;&nbsp;</strong><DirectionsBikeIcon style={{ fontSize: 25 }}/></Typography> 
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 500, overflow: 'auto', justifyContent: "center" }}>
                    <Typography>
                        {cyclingVideos.map(video => (
                            <MediaCard videoId={video.snippet.resourceId.videoId} title={video.snippet.title}></MediaCard>
                        ))}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* Pilates */}
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography style={{ margin: "10px", fontSize: "18px" }}  className={classes.heading}> <strong>Pilates&nbsp;&nbsp;</strong><AccessibilityIcon style={{ fontSize: 25 }}/></Typography> 
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ maxHeight: 550, overflow: 'auto', justifyContent: "center" }}>
                    <Typography>
                        {pilatesVideos.map(video => (
                            <MediaCard videoId={video.snippet.resourceId.videoId} title={video.snippet.title}></MediaCard>
                        ))}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </Container>
        </div>
        
    );
}