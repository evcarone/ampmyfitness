import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

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
        let newBmi = parseInt(703*weight/(height*height))
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
            <div className={classes.root}>
                <AppBar position="static" style={{ backgroundColor: "#3A3D40" }}>
                    <Tabs
                        value={value}
                        onChange={handleChangeBMI, handleChangeMaxHR}
                        indicatorColor="success"
                        textColor="success"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="BMI" {...a11yProps(0)} />
                        <Tab label="Max Heart Rate" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel style={{ backgroundColor: "#8f8f8f" }} value={value} index={0} dir={theme.direction}>
                    <div style={{ textAlign: "center" }}>
                    <form style={{ width: "100%", display: "inline-block", marginBottom: "-30px" }}>
                            <h1 class="display-4" style={{ fontSize: "300%" }}>Input Weight</h1>

                            <TextField onChange={handleWeightChange} id="standard-basic" label="Weight in Pounds" style={{ width: "85%" }} />

                            <br></br>
                            <br></br>

                            <TextField onChange={handleHeightChange} id="standard-basic" label="Height in Inches" style={{ width: "85%" }} />


                            <hr class="my-4"></hr>
                            <div className="button-line" style={{ marginBottom: "50px"}}>
                                <Button color="secondary" type="submit" onClick={handleBMI} variant="contained" children="Submit" />
                            </div>
                            <h1> BMI: {bmi} </h1>
                        
                    </form>
                    </div>
                    
                </TabPanel>

                <TabPanel style={{ backgroundColor: "#8f8f8f" }} value={value} index={1} dir={theme.direction}>
                <div style={{ textAlign: "center" }}>
                    <form style={{ width: "100%", display: "inline-block" }}>
                            <h1 class="display-4" style={{ fontSize: "300%" }}>Input Age</h1>

                            <TextField onChange={handleAgeChange} id="standard-basic" label="Age" style={{ width: "85%" }} />

                            <hr class="my-4"></hr>
                            <div className="button-line" style={{ marginBottom: "50px"}}>
                                <Button color="secondary" type="submit" onClick={handleMaxHR} variant="contained" children="Submit" />
                            </div>
                            <h3><FavoriteBorderIcon style={{ fontSize: "36px" }}/>: {maxHR} </h3>
                    </form>
                    </div>
        </TabPanel>
            </div>
        </Container>
        </div>
    );
}
