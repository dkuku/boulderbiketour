import React, { Component } from 'react';
import {  Switch, Route, withRouter } from 'react-router-dom';
import Home from './Home';
import Location from './Location';
import Riders from './Riders';
import Contest from './Contest';
import Photos from './Photos';
import TopMenu from './TopMenu';
import Title from './Title';
import Footer from './Footer';

class App extends Component {
    
    render() {
    return (
      <div>
      <TopMenu />
        <Title location={this.props.location}/>
        <Switch>
          <Route exact component={Photos} path="/Photos"/>
          <Route exact component={Location} path="/Location"/>
          <Route exact component={Riders} path="/Riders"/>
          <Route exact component={Contest} path="/Contest"/>
          <Route exact component={Home} path="/"/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter( App );

