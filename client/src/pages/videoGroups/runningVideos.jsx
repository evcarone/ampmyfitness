import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LoggedInButtonAppBar from "../../components/LoggedInButtonAppBar/index"
import API from "../../utils/API";
import MediaCard from "../../components/VideoCard/index";

const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        position: 'relative',
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        opacity: "90%",
    },
}));

export default function MaterialVideo() {
    const [runningVideos, setRunningVideos] = useState([])

    const classes = useStyles();

    useEffect(() => {

        API.getRunningPlaylists()
            .then(res => {
                setRunningVideos(res.data.items)
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <div>
            <LoggedInButtonAppBar></LoggedInButtonAppBar>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                        <Grid xs={12} sm={12} md={12}>
                            <Card className={classes.card} style={{ borderRadius: "10px", textAlign: "center" }}>
                                {runningVideos.map(video => (
                                    <MediaCard videoId={video.snippet.resourceId.videoId} title={video.snippet.title}></MediaCard>
                                ))}
                            </Card>
                        </Grid>
                </Grid>
            </Container>
        </div>
    );
}