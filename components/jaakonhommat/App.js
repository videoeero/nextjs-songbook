import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeView from './views/HomeView.js';
import LoginView from './views/LoginView.js';
import SongView from './views/SongView.js';
import './app.css'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={LoginView} />
          <Route path="/song/:number" component={SongView} />
          
          <Route path="/" component={HomeView} />
           
          
        </Switch>
      </div>

      
    </Router>
  );
}

export default App;
