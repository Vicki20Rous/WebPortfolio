import React from 'react';
import { Switch } from 'react-mdl';
import { Route } from 'react-router';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
const Main = () => {
    <Switch>
     <Route exact path= "/" component={LandingPage} />
     <Route exact path= "/aboutme" component={AboutMe} />   
     <Route exact path= "/contact" component={Contact} />   
     <Route exact path= "/projects" component={Projects} />   
     <Route exact path= "/resume" component={Resume} />   

    </Switch>
}

export default Main;