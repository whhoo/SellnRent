import logo from "../logo.png";
import { useState, useEffect } from 'react';
import { Nav, NavDropdown, Navbar, Image } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { db } from '../firebase';

export default function Header() {
    const history = useHistory();
    const { logout, currentUser } = useAuth();
    const [name, setName] = useState('');

    let userHeader = <><Navbar.Brand href="/add">Add</Navbar.Brand>
        <NavDropdown title={name} id="basic-nav-dropdown">
            <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
            <NavDropdown.Item href="/myposts">My Posts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Log Out</NavDropdown.Item>
        </NavDropdown></>

    let noUserHeader = <Navbar.Brand href="/signin">Log In</Navbar.Brand>

    useEffect(() => {
        if (!currentUser) return;
        db.collection("users").where("email", "==", currentUser.email)
            .get()
            .then(docs => {
                docs.forEach(doc => setName(doc.data().name))
            })
    }, [currentUser]);

    function handleLogout() {
        logout();
        history.push('/');
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Search</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Image src={logo} width={50} fluid />
                    {currentUser && userHeader}
                    {!currentUser && noUserHeader}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );

}
