import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Victoria Rouser</h2>
            <h4 style={{color: 'grey'}}>Full-Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>"For There is always light if only we're brave enough to see it. If only we're brave enough to be it. - Amanda Gorman </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>816-469-3165</p>
            <h5>Email</h5>
            <p>vic86rous@gmail.com</p>
          
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2021}
              schoolName="KU Coding Boot Camp"
              schoolDescription="Learned the front end and back end of web development in an accelerated learning program."
               />

               <Education
                 startYear={2001}
                 endYear={2004}
                 schoolName="Raytown High School"
                 schoolDescription="General studies"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;