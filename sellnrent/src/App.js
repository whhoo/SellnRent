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
import Signin from './components/Signin';
import Header from './components/Header';
import MyAccount from './components/MyAccount';

function App() {

  return (
    <AuthProvider>
      <Router >
        <Header/>
        <Switch>
          <Route path="/signup">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signup />
              </div>
            </Container>
          </Route>
          <Route path="/signin">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Signin />
              </div>
            </Container>
          </Route>
          <Route path="/account">
            <MyAccount />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App;
