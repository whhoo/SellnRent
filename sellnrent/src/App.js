import { useState } from 'react';
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

  return (
    <Router>
      <Switch>
        <Route path="/signup">
          <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup />
              </div>
            </Container>
          </AuthProvider>
        </Route>
        <Route path="/">
          <AuthProvider>
            <Home />
          </AuthProvider>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
