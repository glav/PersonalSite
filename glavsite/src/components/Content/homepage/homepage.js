import React from 'react';
import Homewidget1 from '../homewidgets/homewidget1';
import Homewidget2 from '../homewidgets/homewidget2';
import Homewidget3 from '../homewidgets/homewidget3';
import Homewidget4 from '../homewidgets/homewidget4';
import './homepage.css';
import Grid from '@material-ui/core/Grid';


export default function Homepage(props) {

    function renderWidget(props) {
        {
            props.order.map((order, index) => {
                if (order === 1) {
                    return (<Homewidget1 />);
                }
                if (order === 2) {
                    return (<Homewidget2 />);
                }
                if (order === 3) {
                    return (<Homewidget3 />);
                }
                if (order === 4) {
                    return (<Homewidget4 />);
                }

            })
        }
    };
    console.log(props);
    return (
        <Grid container>

            <Grid container item alignItems="stretch" direction="row" justify="center" spacing={2}>
                <Grid item>
                    <Homewidget1 />
                    {renderWidget(props)}
                </Grid>
                <Grid item>
                    <Homewidget2 />
                </Grid>
            </Grid>
            <Grid container item alignItems="stretch" direction="row" justify="center" spacing={2}>
                <Grid item>
                    <Homewidget3 />
                </Grid>
                <Grid item>
                    <Homewidget4 />
                </Grid>
            </Grid>
        </Grid>
    );
};