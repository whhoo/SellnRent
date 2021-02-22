import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
            debugger
            db.collection("posts").where('city', '==', location)
                .get()
                .then(posts => {
                    debugger
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

        let arr = [];
        debugger

        posts.forEach(post => {
            debugger
            for (let i = 0; i < 100; i++) {
                debugger
                storage.ref(`images/${currentUser.email}/${post.title}/${i}`).getDownloadURL()
                    .then(url => {
                        debugger
                        let img = <img src={url} />
                        arr.push(img);
                    })
                    .catch(err => {
                        console.log(err)
                        return;
                    })
            }

        });

        setImgs(arr);

        console.log(arr)

    }, [location])

    return (
        <h3>Showing available posts in {location}:</h3>
    )
}