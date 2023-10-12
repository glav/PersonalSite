import React from 'react';
import Nav from '../nav/nav';
import Blog from '../Content/blog';
import { makeStyles } from '@material-ui/core/styles';
import Homepage from '../Content/homepage/homepage';

import {
    BrowserRouter as Router,
    Routes,
    Route
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
                <Routes>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/contact">
                        <h3>Contact</h3>
                    </Route>
                    <Route path="/">
                        <Homepage order={[1, 2, 3, 4]} />
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}

export default App;