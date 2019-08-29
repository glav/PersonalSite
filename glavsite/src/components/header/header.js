import React, {Component}  from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Header extends Component {
    render() {
        return (
            <Grid container direction="row" justify="space-around"alignItems="center">
                <grid item xs={6}>
                    <Button variant="contained" color="primary">
                        Big
                    </Button>
                </grid>
                <grid item xs={6}>
                    <Button variant="contained" color="secondary">
                        Woop
                    </Button>
                </grid>
            </Grid>
        );
    
    }
}
export default Header;