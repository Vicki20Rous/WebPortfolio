import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
// eslint-disable-next-line no-unused-vars
import Main from './component/main';
import { Link } from 'react-router';

class App extends Component {
    render() {
        return(
            <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>


        )
    }
}

export default App;