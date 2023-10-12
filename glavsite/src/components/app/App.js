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
                    <Route path="/blog" element={<Blog />}>
                        
                    </Route>
                    <Route path="/contact">
                        
                    </Route>
                    <Route path="/" element={<Homepage />}>
                        
                    </Route>
                </Routes>
            </main>
        </Router>
    );
}

export default App;