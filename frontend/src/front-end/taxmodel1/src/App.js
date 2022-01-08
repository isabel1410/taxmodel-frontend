import React, {Component, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';





import './App.css';
import Home from './component/Home/Home';
import Project from './component/Project/Project';
import Navbar from './component/Navbar/Navbar';
import Dashboard from './component/Dashboard/Dashboard';
import Pipeline from './component/pipeline/pipeline';
import PipelineDetails from './component/pipeline/PipelineDetails';
import PullRequests from './component/pull-requests/PullRequests';
import PullRequestsById from './component/pull-requests/PullRequestsById';
import Login from './component/Login/Login';
import Developers from './component/Developers/developers'

function SecuredRoute(props) {

    var loggedIn = localStorage.getItem('users')
    if(loggedIn != null){
        return(<Route path={props.path}
                component ={props.component}>
            </Route>)
    }
    else{
        return(<Redirect to={{ pathname: '/' }}></Redirect>)
    }
}



function App() {


  return (

      <Router>
        <Navbar></Navbar>
        <Switch>
          <SecuredRoute exact path="/pipeline" component={Pipeline}/>
          <SecuredRoute  exact path="/pipeline/:id"  component={PipelineDetails}/>
          <SecuredRoute exact path="/pull-requests" component={PullRequests} />
          <SecuredRoute exact path="/pull-requests/:id" component={PullRequestsById}/>
          <SecuredRoute path="/project" component={Project} />
          <Route path="/" exact component={Login}/>
          <SecuredRoute path="/home" component={Home} />
          <SecuredRoute path="/dashboard" component={Dashboard} />
          <SecuredRoute path="/developers" component={Developers} />
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
  );
}

export default App;
