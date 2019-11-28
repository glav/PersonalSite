import React, { useState } from 'react';
import Homewidget from '../homewidgets/homewidget';
import './homepage.css';
import Grid from '@material-ui/core/Grid';
import image1 from '../homewidgets/sample-image1.png';
import image2 from '../homewidgets/sample-image2.jpg';
import image3 from '../homewidgets/sample-image3.jpg';
import image4 from '../homewidgets/sample-image4.jpg';


const images = [image1, image2, image3, image4];
const stylesToUse = ['', 'widgetJiggle', '','widgetBobble','']

export default function Homepage(props) {

    const [style, setStyle] = useState(['', '', '', '']);
    const rndMax = stylesToUse.length - 1;
    const getStyleToUse = _ => stylesToUse[Math.round(Math.random() * rndMax)];

    setTimeout(function () {
        let len = style.length;
        let newStyles = [];
        for (var cnt = 0; cnt < len; cnt++) {
            newStyles.push(getStyleToUse())
        }
        setStyle(newStyles);
    }, 5000);
    return (
        <Grid container item alignItems="stretch" direction="row" justify="center" spacing={2}>

            {images.map((img, index) => (
                <Grid item key={index}>
                    <Homewidget image={img} imageClass={style[index]} />
                </Grid>
            ))}
        </Grid>
    );
}