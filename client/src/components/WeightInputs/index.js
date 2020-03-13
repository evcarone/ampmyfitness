import React, { useState, useEffect } from 'react';
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
        width: "100%",
        position: 'relative',
        maxHeight: 500,
    },
}));

export default function FloatingActionButtonZoom() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleWeightChange = (e) => {
        setWeight(e.target.value)
        console.log(weight)
    };

    const handleHeightChange = (e) => {
        setHeight(e.target.value)
        console.log(height)
    };

    const handleBMI = (event) => {
        event.preventDefault()
        let newBmi = parseInt(703*weight/(height*height))
        setBmi(newBmi)
    };
    return (
<div style={{ textAlign: "center", width: "85%" }}>
        <Container style={{ display: "inline-block" }}>
            <div className={classes.root}>
                <AppBar style={{ backgroundColor: "#003C57" }} position="static">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="success"
                        textColor="success"
                        variant="fullWidth"
                        aria-label="action tabs example"
                    >
                        <Tab label="Input Stats" {...a11yProps(0)} />
                        <Tab label="View Charts" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <TabPanel style={{ backgroundColor: "#8f8f8f" }} value={value} index={0} dir={theme.direction}>
                    <div style={{ textAlign: "center" }}>
                    <form style={{ width: "100%", display: "inline-block" }}>
                        <div className="jumbotron" >
                            <h1 class="display-4" style={{ fontSize: "300%" }}>Input Weight!</h1>

                            <TextField onChange={handleWeightChange} id="standard-basic" label="Weight in Pounds" style={{ width: "85%" }} />

                            <br></br>
                            <br></br>

                            <TextField onChange={handleHeightChange} id="standard-basic" label="Height in Inches" style={{ width: "85%" }} />


                            <hr class="my-4"></hr>
                            <div className="button-line" style={{ marginBottom: "50px"}}>
                                <Button style={{ background: "#003C57", color: "white" }} type="submit" onClick={handleBMI} variant="contained" children="Submit" />
                            </div>
                        </div>
                    </form>
                    </div>
                    
                </TabPanel>

                <TabPanel style={{ backgroundColor: "#8f8f8f" }} value={value} index={1} dir={theme.direction}>
                    <h1> BMI: {bmi} </h1>
        </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
        </TabPanel>

            </div>

        </Container>
        </div>
    );
}
