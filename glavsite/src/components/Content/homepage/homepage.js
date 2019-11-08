import React from 'react';
import Homewidget from '../homewidgets/homewidget';
import './homepage.css';
import Grid from '@material-ui/core/Grid';
import image1 from '../homewidgets/sample-image1.png';
import image2 from '../homewidgets/sample-image2.jpg';
import image3 from '../homewidgets/sample-image3.jpg';
import image4 from '../homewidgets/sample-image4.jpg';


const images = [image1, image2, image3, image4];

export default function Homepage(props) {

    console.log(props);
    return (
        <Grid container item alignItems="stretch" direction="row" justify="center" spacing={2}>

            {images.map((img, index) => (
                <Grid item>
                    <Homewidget image={img} />
                </Grid>
            ))}
        </Grid>
    );
}