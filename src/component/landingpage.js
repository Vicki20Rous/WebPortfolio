import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: '100', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                        src="https://i.pinimg.com/originals/12/ec/98/12ec98763de57709373028ac373f9511.jpg" 
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                        <h1>Full Stack Developer</h1>
                        
                        <hr/>
                        </div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default LandingPage;