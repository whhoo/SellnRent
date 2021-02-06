import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {  

  return(
    <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  ) 
}

export default App;
