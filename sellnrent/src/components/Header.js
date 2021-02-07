import logo from "../logo.png";
import Drop from './Drop';
import {useAuth} from '../contexts/AuthContext';

export default function Header(props) {
    const {currentUser} = useAuth();

    if (currentUser) {
        return (
            <div className="header">
                <a href="/">Search</a>
                <img src={logo} className="lginlogo" alt=""/>
                <a href="/add">Add</a>
                <Drop />
            </div>
        );
    } else {
        return (
            <div className="header">
                <a href="/">Search</a>
                <img src={logo} className="lgofflogo" alt=""/>
                <a href="/signin">Login</a>
            </div>
        );
    }

}