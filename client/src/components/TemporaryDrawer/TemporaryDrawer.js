import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FitnessCenter from '@material-ui/icons/FitnessCenter'
import Home from '@material-ui/icons/Home';
import Videocam from '@material-ui/icons/Videocam'
import ExitToApp from "@material-ui/icons/ExitToApp"
import { Link } from "react-router-dom";
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    link: {
        color: red[800]
    }
});
export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [side]: open });
    };
    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <ListItem button>
                    <ListItemIcon><Home className={classes.link} color="secondary"/></ListItemIcon>
                    <Link style={{ color: "black", textDecoration: "none" }} to={"/home"}>
                        <ListItemText primary="Home" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><FitnessCenter className={classes.link} color="secondary"/></ListItemIcon>
                    <Link style={{ color: "black", textDecoration: "none" }} to={"/exercises"}>
                        <ListItemText primary="Exercises" />
                    </Link>
                </ListItem> 
                <ListItem button>
                    <ListItemIcon><Videocam className={classes.link} color="secondary"/></ListItemIcon>
                    <Link style={{ color: "black", textDecoration: "none" }} to={"/videos"}>
                        <ListItemText primary="Videos" />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon><ExitToApp className={classes.link} color="secondary" /></ListItemIcon>
                    <Link style={{ color: "black", textDecoration: "none" }} to={"/logout"}>
                        <ListItemText primary="Log Out" />
                    </Link>
                </ListItem>
            </List>

        </div>
    );
    const fullList = side => (
        <div
            className={classes.fullList}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >

        </div>
    );
    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon style={{ color: 'white' }} />
                </IconButton>
            </Button>

            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>

        </div>
    );
}