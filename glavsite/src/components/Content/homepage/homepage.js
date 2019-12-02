import React, { useState } from 'react';
import Homewidget from '../homewidgets/homewidget';
import Homeblurb from '../homeblurb/homeblurb';
import './homepage.css';
import Grid from '@material-ui/core/Grid';
import image1 from '../homewidgets/me1-small.jpg';
import image2 from '../homewidgets/me2-small.jpg';
import image3 from '../homewidgets/me3-small.jpg';
import image4 from '../homewidgets/me4-small.jpg';


const images = [image1, image2, image3, image4];
const stylesToUse = ['', 'widgetJiggle1', '', 'widgetBobble1', '', 'widgetJiggle2', '', 'pulse', '']

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
        <Grid container direction="row" alignContent="flex-start" spacing={3} >
            <Grid item xs="8">
                <Homeblurb />
            </Grid>
            <Grid container item xs="4" direction="column" spacing={6} >

                {images.map((img, index) => (
                    <Grid item key={index}>
                        <Homewidget image={img} imageClass={style[index]} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}