import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom';

export default function Drop(props){
    const history = useHistory();
    const [dropdownOpen, setDropdownOpen] = useState('');

    const { logout, currentUser } = useAuth();

    function handleLogout() {
        logout();
        history.push('/');
    }

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="drop">
                    <DropdownToggle caret>
                        {currentUser.displayName}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => window.location = '/account'}>My Account</DropdownItem>
                        <DropdownItem onClick={() => window.location = '/posts'}>My Posts</DropdownItem>
                        <DropdownItem onClick={handleLogout}>Log out</DropdownItem>  
                    </DropdownMenu>
        </Dropdown>
    )
}