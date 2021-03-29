import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from './Componenets/Home/Home';
import Post from './Componenets/Post/Post';
import About from './Componenets/About/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path="/post"  component={Post} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
