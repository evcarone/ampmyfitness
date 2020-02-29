import React, { useState, useEffect } from 'react';
import API from "../utils/API";
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));







// Handles updating component state when the user types into the input field


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
                    <Typography className={classes.heading}>Yoga</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography xs="12">
                        {yogaVideos.map(video => (
                            <div>
                            <p>{video.snippet.title}</p>
                            <iframe id="ytplayer" type="text/html" width="640" height="360"
                             src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?autoplay=1`}
                             frameborder="0"></iframe>
                             <p>{video.snippet.resourceId.videoId}</p>
                            </div>
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
                    <Typography className={classes.heading}>Running</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
          </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel disabled>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                </ExpansionPanelSummary>
            </ExpansionPanel>
        </div>
    );
}