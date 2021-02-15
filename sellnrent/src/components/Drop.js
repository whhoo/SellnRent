import { useState, useEffect } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';
import { db } from '../firebase';

export default function Drop(){
    const history = useHistory();
    const [dropdownOpen, setDropdownOpen] = useState('');
    const [name, setName] = useState('');

    const { logout, currentUser } = useAuth();
    
    useEffect(() => {
        db.collection("users").where("email", "==", currentUser.email)
        .get()
        .then(docs => {
            docs.forEach(doc => setName(doc.data().name))
        })
    },[currentUser]);

    function handleLogout() {
        logout();
        history.push('/');
    }

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="drop">
                    <DropdownToggle caret>
                        {name}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => window.location = '/account'}>My Account</DropdownItem>
                        <DropdownItem onClick={() => window.location = '/posts'}>My Posts</DropdownItem>
                        <DropdownItem onClick={handleLogout}>Log out</DropdownItem>  
                    </DropdownMenu>
        </Dropdown>
    )
}