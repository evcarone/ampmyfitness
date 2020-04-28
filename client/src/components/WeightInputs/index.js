import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#f5f5f5",
        width: "auto",
        position: 'relative',
    },
}));

export default function FloatingActionButtonZoom() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [bmi, setBmi] = useState("");
    const [maxHR, setmaxHR] = useState("");

    const handleChangeBMI = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeMaxHR = (event, newValue) => {
        setValue(newValue);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value)
        console.log(weight)
    };

    const handleAgeChange = (e) => {
        setAge(e.target.value)
        console.log(age)
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value)
        console.log(height)
    };

    const handleBMI = (event) => {
        event.preventDefault()
        let newBmi = parseInt(703 * weight / (height * height))
        setBmi(newBmi)
    };

    const handleMaxHR = (event) => {
        event.preventDefault()
        let newMaxHR = parseInt(220 - age)
        setmaxHR(newMaxHR)
    };

    return (
        <div style={{ textAlign: "center", width: "75%", height: "100px" }}>
            <Container style={{ display: "inline-block", opacity: ".8" }}>
                {/* <div className={classes.root}> */}
                <Grid container spacing={4}>
                    <Grid xs={12} sm={12} md={6}>
                        <ExpansionPanel style={{ marginLeft: "10px", marginRight: "10px", marginBottom: "10px" }}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}>
                                <Typography style={{ margin: "10px", fontSize: "18px" }}><strong>MAX HEART RATE&nbsp;&nbsp;<FavoriteBorderIcon style={{ color: "#c51f30" }} />&nbsp;{maxHR}</strong></Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{ overflow: 'auto', justifyContent: "center" }}>
                                <div>
                                    <form style={{ width: "100%", display: "inline-block" }}>
                                        <TextField onChange={handleAgeChange} label="Age" />
                                        <br></br>
                                        <br></br>
                                        <Button color="secondary" type="submit" onClick={handleMaxHR} variant="contained" children="Submit" />
                                    </form>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                    <Grid xs={12} sm={12} md={6}>
                        <ExpansionPanel style={{ marginLeft: "10px", marginRight: "10px" }}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}>
                                <Typography style={{ margin: "10px", fontSize: "18px" }}><strong>BMI&nbsp;&nbsp;<BarChartIcon style={{ color: "#c51f30" }} />&nbsp;{bmi}</strong> </Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails style={{ maxHeight: 600, overflow: 'auto', justifyContent: "center" }}>
                                <div>
                                    <form style={{ width: "100%", display: "inline-block" }}>
                                        <TextField onChange={handleWeightChange} label='Weight (in.)' />
                                        <br></br>
                                        <TextField onChange={handleHeightChange} label="Height (lbs.)" />
                                        <br></br>
                                        <br></br>
                                        <Button color="secondary" type="submit" onClick={handleBMI} variant="contained" children="Submit" />
                                    </form>
                                </div>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
