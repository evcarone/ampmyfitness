import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoggedInButtonAppBar from "../components/LoggedInButtonAppBar/index";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Links from '@material-ui/core/Link';
import LaunchIcon from '@material-ui/icons/Launch';
import CodeIcon from '@material-ui/icons/Code';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cardGrid: {
        paddingTop: theme.spacing(8)
    },
    card: {
        height: '100%',
        position: 'relative',

    },
    cardMedia: {
        paddingTop: '82.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    button: {
    fontSize: "28px", 
    fontWeight: "bolder",
    color: "white", 
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)", 
    opacity: ".9", 
    height: "100%", 
    width: "100%",
    letterSpacing: "8px",
}
}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div>
            <LoggedInButtonAppBar />
            <div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        <Grid xs={12} sm={6} md={4} style={{ padding: "15px" }}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/back.jpg">
                                <Button className={classes.button}>BACK</Button>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: "15px" }}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/arms.jpg">
                                    <Button className={classes.button}>ARMS</Button>
                                    </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: "15px" }}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/chest.jpg">
                                <Button className={classes.button}>CHEST</Button>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: "15px" }}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/abs.jpg">
                                <Button className={classes.button}>ABS</Button>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: "15px" }}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/legs.jpg"
                                >
                                    <Button className={classes.button}>LEGS</Button>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4} style={{ padding: "15px" }}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/shoulders.jpg">
                                <Button className={classes.button}>SHOULDERS</Button>
                                </CardMedia>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}