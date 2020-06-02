import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LoggedInButtonAppBar from "../components/LoggedInButtonAppBar/index";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

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
                        <Grid xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/back.jpg">
                                    <Link style={{ color: "black", textDecoration: "none" }} to={"/backExercises"}>
                                        <Button className={classes.button}>BACK
                                </Button>
                                    </Link>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/arms.jpg">
                                    <Link style={{ color: "black", textDecoration: "none" }} to={"/armExercises"}>
                                        <Button className={classes.button}>ARMS</Button>
                                    </Link>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/chest.jpg">
                                    <Link style={{ color: "black", textDecoration: "none" }} to={"/chestExercises"}>
                                        <Button className={classes.button}>CHEST</Button>
                                    </Link>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/abs.jpg">
                                    <Link style={{ color: "black", textDecoration: "none" }} to={"/abExercises"}>
                                        <Button className={classes.button}>ABS</Button>
                                    </Link>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/legs.jpg">
                                    <Link style={{ color: "black", textDecoration: "none" }} to={"/legExercises"}>
                                        <Button className={classes.button}>LEGS</Button>
                                    </Link>
                                </CardMedia>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="images/exercises/shoulders.jpg">
                                    <Link style={{ color: "black", textDecoration: "none" }} to={"/shoulderExercises"}>
                                        <Button className={classes.button}>SHOULDERS</Button>
                                    </Link>
                                </CardMedia>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
}