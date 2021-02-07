import {useState} from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';

function App() {

  const [user, setUser] = useState(null);

  debugger

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup user={user} setUser={setUser}/>
              </div>
            </Container>
          </AuthProvider>
        </Route>
        <Route path="/">
          <Home user={user} setUser={setUser}/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
