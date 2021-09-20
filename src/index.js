import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route } from "react-router-dom";

import NavMenu from './components/layout/navbar';
import Footer from './components/layout/footer';
import Homepage from './components/pages/homepage';
import LogIn from './components/autorization/log-in';
import SignIn from './components/autorization/sign-in';
import './index.css';
// simple router using react-router-bootstrap inside <NavMenu/>
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <NavMenu/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={LogIn} />
          <Route path="/signin" component={SignIn} />
          <Route path="/mainpage" component={Homepage} />
          {/* <Route path="/search" component={Search} /> */}

        </Switch>
      </Router>
      {/* <Footer/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
