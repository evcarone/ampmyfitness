import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    button: {
        backgroundColor: red[900]
    }
}));

export default function OutlinedButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div style={{ margin: "0", position: "absolute", top: "37%", left: "50%", transform: "translate(-50%, -50%)" }} >
            <Link style={{ color: "black", textDecoration: "none" }} to={"/login"}>
                <Button className={classes.button} variant="contained" color="primary" style={{ width: "250px", height: "45px" }}>
                    Enter </Button>
                    </Link>
            </div>
        </div>
    );
}