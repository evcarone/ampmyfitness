import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[600],
    },
}));

export default function MaterialVideo() {
    const [cyclingVideos, setCyclingVideos] = useState([])

    const classes = useStyles();

    useEffect(() => {

        API.getCyclingPlaylists()
            .then(res => {
                setCyclingVideos(res.data.items)
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <div>
            <LoggedInButtonAppBar></LoggedInButtonAppBar>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <div style={{ color: "white"}}>HELLO</div>
                <Grid container spacing={4}>
                        <Grid xs={12} sm={12} md={6}>
                            <Card className={classes.card} style={{ border: "black solid 5px", borderRadius: "25px" }}>
                                {cyclingVideos.map(video => (
                                    <MediaCard videoId={video.snippet.resourceId.videoId} title={video.snippet.title}></MediaCard>
                                ))}
                            </Card>
                        </Grid>
                </Grid>
            </Container>
        </div>
    );
}