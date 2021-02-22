import React, { useRef, useState } from 'react';
import { Form, Button, Card, Col, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { db, storage } from '../firebase';
import { useHistory } from 'react-router-dom';

export default function Add() {
    const [type, setType] = useState('apart');
    const [status, setStatus] = useState('sell');
    const [images, setImages] = useState([]);
    const [postIndex, setPostIndex] = useState(0);
    const { currentUser } = useAuth();
    const history = useHistory();
    const types = [
        { name: 'Apartment', value: 'apart' },
        { name: 'House', value: 'house' },
    ];
    const statuses = [
        { name: 'Sell', value: 'sell' },
        { name: 'Rent', value: 'rent' },
    ];

    const cityRef = useRef();
    const streetRef = useRef();
    const buildingRef = useRef();
    const apartmentRef = useRef();
    const houseRef = useRef();
    const roomsRef = useRef();
    const areaRef = useRef();
    const descrRef = useRef();
    const priceRef = useRef();
    const exchRef = useRef();
    const periodRef = useRef();

    const data = {}



    function handleSubmit(e) {
        e.preventDefault();

        let price = `${priceRef.current.value} ${exchRef.current.value}`

        if (status === 'rent') price += `/${periodRef.current.value}`

        data.title = `post ${postIndex}`;
        data.author = currentUser.email;
        data.status = status;
        data.type = type;
        data.city = cityRef.current.value;
        data.street = streetRef.current.value;
        data.building = buildingRef.current.value;
        data.apart = apartmentRef.current.value;
        data.house = houseRef.current.value;
        data.rooms = roomsRef.current.value;
        data.area = areaRef.current.value;
        data.descr = descrRef.current.value;
        data.price = price;
        data.imgs = [];


        images.forEach((image, index) => {
            debugger
            const uploadTask = storage.ref(`images/${currentUser.email}/post ${postIndex}/${index}`).put(image);
            storage
                .ref(`images/${currentUser.email}/post ${postIndex}/${index}`)
                .getDownloadURL()
                .then(url => {
                    data.imgs.push(url);
                })
                .catch(err => console.log(err))
        });

        db.collection(`posts`).doc(`post ${postIndex}`).set(data);


        setPostIndex(postIndex + 1);

        history.push('/');
    }

    function handleImgChange(e) {
        let arr = [];
        for (let i = 0; i < e.target.files.length; i++) arr.push(e.target.files[i])
        setImages(arr)
    }

    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Add post</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Row>
                            <Col>
                                <ButtonGroup toggle>
                                    {statuses.map((status, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            type="radio"
                                            variant="secondary"
                                            value={status.value}
                                            name="status"
                                            checked={status === status.value}
                                            onChange={(e) => setStatus(e.currentTarget.value)}
                                        >
                                            {status.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </Col>
                            <Col>
                                <ButtonGroup toggle>
                                    {types.map((type, idx) => (
                                        <ToggleButton
                                            key={idx}
                                            type="radio"
                                            variant="secondary"
                                            value={type.value}
                                            name="type"
                                            checked={type === type.value}
                                            onChange={(e) => setType(e.currentTarget.value)}
                                        >
                                            {type.name}
                                        </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group id="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" ref={cityRef} />
                    </Form.Group>
                    <Form.Group id="street">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" ref={streetRef} />
                    </Form.Group>

                    <Form.Group id="building" hidden={type === 'house'}>
                        <Form.Label>Building</Form.Label>
                        <Form.Control type="text" ref={buildingRef} />
                    </Form.Group>
                    <Form.Group id="apart" hidden={type === 'house'}>
                        <Form.Label>Apartment</Form.Label>
                        <Form.Control type="text" ref={apartmentRef} />
                    </Form.Group>
                    <Form.Group id="house" hidden={type === 'apart'}>
                        <Form.Label>House</Form.Label>
                        <Form.Control type="text" ref={houseRef} />
                    </Form.Group>
                    <Form.Group id="rooms">
                        <Form.Label>Number of rooms</Form.Label>
                        <Form.Control type="number" ref={roomsRef} min="1" max="10" />
                    </Form.Group>
                    <Form.Group id="area">
                        <Form.Label>Area</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control type="number" ref={areaRef} min="30" />
                            </Col>
                            <Col>
                                <Form.Label>sqm</Form.Label>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group id="descr">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={descrRef} />
                    </Form.Group>
                    <Form.Group id="pictures">
                        <Form.Label>Pictures</Form.Label>
                        <Form.File accept="image**" multiple onChange={handleImgChange} />
                    </Form.Group>
                    <Form.Group id="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control type="number" ref={priceRef} />
                            </Col>
                            <Col>
                                <Form.Control as="select" ref={exchRef} >
                                    <option value="usd">USD</option>
                                    <option value="amd">AMD</option>
                                </Form.Control>
                            </Col>
                            <Col hidden={status === "sell"} w>
                                <Form.Label>per</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control as="select" ref={periodRef} hidden={status === "sell"} >
                                    <option value="day">day</option>
                                    <option value="month">month</option>
                                </Form.Control>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Button type="submit" className="w-100">Add</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}