import logo from "../logo.png";
import Drop from './Drop'

export default function Header(props) {

    if (props.isLoggedIn) {
        return (
            <div className="header">
                <a href="/">Search</a>
                <img src={logo} className="lginlogo"/>
                <a href="/add">Add</a>
                <Drop setIsLoggedIn={props.setIsLoggedIn}/>
            </div>
        );
    } else {
        return (
            <div className="header">
                <a href="/">Search</a>
                <img src={logo} className="lgofflogo"/>
                <a href="/login">Login</a>
            </div>
        );
    }

}