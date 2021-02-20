import { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { Link } from 'react-router-dom';

export default function MyPage() {
    const { currentUser } = useAuth();
    const [info, setInfo] = useState({});

    useEffect(() => {
        db.collection("users").where("email", "==", currentUser.email)
            .get()
            .then(docs => {
                docs.forEach(doc => setInfo(doc.data()))
            })
    }, [currentUser]);

    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">My Account</h2>
                <div className="account">
                    <div className="column">
                        <h6>Name Surname</h6>
                        <br />
                        <h6>Email</h6>
                        <br />
                        <h6>Phone number</h6>
                    </div>
                    <div>
                        <h6>{info.name}</h6>
                        <br />
                        <h6>{info.email}</h6>
                        <br />
                        <h6>{info.phone}</h6>
                    </div>
                </div>
                <br />
                <div className="buttonPostsChanges">
                    <span className='linkMyPost'>Go to</span>
                    <Link to="/myposts"> My posts</Link>
                </div>
                <br />
                <div className="buttonPostsChanges">
                    <Link to="/update">Change Password</Link>
                </div>
            </Card.Body>
        </Card>
    )
}