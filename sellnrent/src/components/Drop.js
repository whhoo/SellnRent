import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


export default function Drop(props){
    const [dropdownOpen, setDropdownOpen] = useState('');

    const toggle = () => setDropdownOpen(prevState => !prevState);
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle} className="drop">
                    <DropdownToggle caret>
                        Name Surname
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={() => window.location = '/account'}>My Account</DropdownItem>
                        <DropdownItem onClick={() => window.location = '/posts'}>My Posts</DropdownItem>
                        <DropdownItem onClick={() => props.setIsLoggedIn(false)}>Log out</DropdownItem>
                    </DropdownMenu>
        </Dropdown>
    )
}