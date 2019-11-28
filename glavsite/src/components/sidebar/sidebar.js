import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import './sidebar.css';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
    hide: {
        display: 'none',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    }
}));


export default function Sidebar(props) {

    const classes = useStyles();

    const homeLink = React.forwardRef((props, ref) => <Link to="/" {...props} ref={ref} />);
    const blogLink = React.forwardRef((props, ref) => <Link to="/blog" {...props} ref={ref} />);
    const contactLink = React.forwardRef((props, ref) => <Link to="/contact" {...props} ref={ref} />);

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: clsx({
                    [classes.drawerOpen]: props.openState,
                    [classes.drawerClose]: !props.openState
                })
            }}
        >
            <div className={classes.toolbar} />
            <List>
                <ListItem button key='h' component={homeLink}>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem button key='a' component={blogLink}>
                    <ListItemIcon><FaceIcon /></ListItemIcon>
                    <ListItemText primary='About me' />
                </ListItem>
                <ListItem button key='Contact me' component={contactLink}>
                    <ListItemIcon><ContactMailIcon /></ListItemIcon>
                    <ListItemText primary='Contact me' />
                </ListItem>

            </List>
            <Divider />
        </Drawer>
    );

};