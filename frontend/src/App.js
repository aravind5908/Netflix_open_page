import React from "react";
import './App.css';
import Main from './components/Main/main';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function App() {
  return (
    
      <Router>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
    </Router>
    
  );
}

export default App;
