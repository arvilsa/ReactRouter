import React from 'react';
import ReactDOM from 'react-dom';
import {
    Route, 
    BrowserRouter, 
    Switch 
} from 'react-router-dom'
import './index.css';
import App from './App';
import Contact from './Contact';
import About from './About';
import Navigator from './Navigator';
import * as serviceWorker from './serviceWorker';

const routing = (
    
    
    <BrowserRouter>
        <div>
            <Navigator/>         
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={()=> <h1>Page not found</h1>} />
            </Switch>
        </div>

  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
