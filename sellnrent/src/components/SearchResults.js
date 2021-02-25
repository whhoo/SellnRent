import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { db, storage } from '../firebase';

export default function SearchResults() {
    let { location, status } = useParams();
    location = location.charAt(0).toUpperCase() + location.slice(1);
    const { currentUser } = useAuth();
    const [posts, setPosts] = useState([]);
    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        if (status !== 'sell' || status !== 'rent') {
            db.collection("posts").where('city', '==', location)
                .get()
                .then(posts => {
                    let arr = []
                    posts.forEach(post => arr.push(post.data()));
                    console.log(arr)
                    setPosts(arr);
                })
                .catch(err => console.log(err))
        } else {
            db.collection("posts").where('city', '===', location && 'status', '===', status)
                .get()
                .then(posts => {
                    let arr = []
                    posts.forEach(post => arr.push(post.data()));
                    setPosts(arr);
                })
                .catch(err => console.log(err))
        }

    }, [location])

    let cards = posts.map(post => {
        post.address = `${post.street} ${post.building && post.building} ${post.apart && post.apart} ${post.house && post.house}`

        return (<Card style={{ width: '18rem', margin: '10px', display: 'inline-block' }}>
            <Card.Img variant="top" src={post.imgs[0]} />
            <Card.Body>
                <Card.Title>{post.price}</Card.Title>
                <Card.Text>{post.address}</Card.Text>
                <Button variant="primary">Show more</Button>
            </Card.Body>
        </Card>)
    });




    return (<>
        <h3>Showing available posts in {location}:</h3>
        {cards}
    </>
    )
}