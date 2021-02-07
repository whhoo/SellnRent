import logo from "../logo.png";
import Drop from './Drop'

export default function Header(props) {
    debugger

    if (props.user) {
        return (
            <div className="header">
                <a href="/">Search</a>
                <img src={logo} className="lginlogo"/>
                <a href="/add">Add</a>
                <Drop setUser={props.setUser}/>
            </div>
        );
    } else {
        return (
            <div className="header">
                <a href="/">Search</a>
                <img src={logo} className="lgofflogo"/>
                <a href="/signup">Login</a>
            </div>
        );
    }

}