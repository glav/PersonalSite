import React from 'react';
import Nav from '../nav/nav';
import Blog from '../Content/blog';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(11),
    },
}));

function App() {
    const classes = useStyles();

    return (
        <Router>
            <Nav />
            <main className={classes.content}>
                <Switch>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route exact path="/">
                        <h2>Home</h2>
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;