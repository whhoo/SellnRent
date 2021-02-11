import { Form, Button, Card, Alert } from 'react-bootstrap';
import {useAuth} from '../contexts/AuthContext';

export default function MyPage() {
    const {currentUser} = useAuth();

    const name = currentUser.displayName;
    const phone = currentUser.phoneNumber;
    
    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">My Account</h2>
                <div className="account">
                    <div className="column">
                        <h6>Name Surname</h6>
                        <br/>
                        <h6>Email</h6>
                        <br/>
                        <h6>Phone number</h6>
                    </div>
                    <div>
                        <h6>{name}</h6>
                        <br/>
                        <h6>{currentUser.email}</h6>
                        <br/>
                        <h6>{phone}</h6>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}