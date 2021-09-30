import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Nav from './component/Nav';
import About from './component/About';
import Projects from './component/Projects';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {isMobile, isTablet} from 'react-device-detect';
import MobileProjects from './component/MobileProjects';

const Root = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path='/' component={App}></Route>
      <Route exact path='/projects' render={() => {

        let result;

        if (isTablet) {
          result = <Projects />
        } else if (isMobile) {
          result =  <MobileProjects />
        } 
        return result || <Projects />;
      }} />
      <Route exact path='/about' component={About} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
