import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useAuth } from '../contexts/AuthContext';


export default function Drop(props){
    const [dropdownOpen, setDropdownOpen] = useState('');

    const { logout } = useAuth()

    async function handleLogout() {
        await logout();
    }

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="drop">
                    <DropdownToggle caret>
                        Name Surname
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => window.location = '/account'}>My Account</DropdownItem>
                        <DropdownItem onClick={() => window.location = '/posts'}>My Posts</DropdownItem>
                        <DropdownItem onClick={handleLogout}>Log out</DropdownItem>
                    </DropdownMenu>
        </Dropdown>
    )
}