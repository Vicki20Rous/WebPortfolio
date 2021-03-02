import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Victoria Rouser</h2>
                        <img
                        src="https://i.pinimg.com/originals/12/ec/98/12ec98763de57709373028ac373f9511.jpg"
                        alt="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: "1em"}}>Feel Free to Contact Me</p>
                    
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '30px', fontFamily: 'sans-serif'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (816) 469-3165
                                    </ListItemContent>
                                </ListItem>
                                                                                   
                                    <ListItem>
                                        <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                            <i className="fa fa-envelope" aria-hidden="true"/>
                                            vic86rous@gmail.com
                                        </ListItemContent>
                                    </ListItem>
                                                  
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
                  
    export default Contact;