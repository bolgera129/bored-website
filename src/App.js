import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from "./Components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Homies from 'Components/Homies';
import Fish from 'Components/Fish';
import Aftermath from 'Components/Aftermath';
import Destinations from 'Components/Destinations';

function App() {
  const [clicked,setClicked] = useState(false)
  if (!clicked){
    const link = document.createElement('div');
    link.href = '/home';
    // 3. Append to html page
    document.body.appendChild(link);
    // 4. Force download
    link.click();
    // 5. Clean up and remove the link
    link.parentNode.removeChild(link);
    setClicked(true)
  }

  require('dotenv').config()
  return (
      <Router basename = {process.env.PUBLIC_URL}>
          <main className = "marginBot20">

            {
              <Switch>
                <Route path = "/home">
                  <Home />
                </Route>
                <Route path = "/homies">
                  <Homies/>
                </Route>
                <Route path = "/destinations">
                  <Destinations/>
                </Route>
                <Route path = "/aftermath">
                  <Aftermath/>
                </Route>
                <Route path = "/fish">
                  <Fish/>
                </Route>
                <Route path = ""> 
                  <Home/>
                </Route>
              </Switch>
            }        
          </main>
      </Router>   
  );
}

export default App;
