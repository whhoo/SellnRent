import React, { useRef, useState } from 'react';
import { Form, Button, Card, Col, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { db, storage } from '../firebase';
import { useHistory } from 'react-router-dom';

export default function Add() {
    const [radioValue, setRadioValue] = useState('1');
    const [image, setImage] = useState(null);
    const { currentUser } = useAuth();
    const history = useHistory();
    const radios = [
        { name: 'Apartment', value: '1' },
        { name: 'House', value: '2' },
    ];

    const cityRef = useRef();
    const streetRef = useRef();
    const buildingRef = useRef();
    const apartmentRef = useRef();
    const houseRef = useRef();
    const roomsRef = useRef();
    const areaRef = useRef();
    const descrRef = useRef();
    const imagesRef = useRef();

    const data = {}


    function handleSubmit(e) {
        e.preventDefault();

        data.city = cityRef.current.value;
        data.street = streetRef.current.value;
        data.building = buildingRef.current.value;
        data.apart = apartmentRef.current.value;
        data.house = houseRef.current.value;
        data.rooms = roomsRef.current.value;
        data.area = areaRef.current.value;
        data.descr = descrRef.current.value;

        db.collection("posts").add(data);

        debugger
        
        const uploadTask = storage.ref(`images/${currentUser.email}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => { },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(currentUser.email)
                    .getDownloadURL()
                    .then(url => {
                        console.log(url);
                    })
            }
        )

        history.push('/');
    }

    function handleChange(e) {
        if(e.target.files[0]) setImage(e.target.files[0])
    }

    return (
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Add post</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" ref={cityRef} required />
                    </Form.Group>
                    <Form.Group id="street">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="text" ref={streetRef} required />
                    </Form.Group>
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="secondary"
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                    <Form.Group id="building">
                        <Form.Label>Building</Form.Label>
                        <Form.Control type="text" ref={buildingRef} required disabled={radioValue === '2'} />
                    </Form.Group>
                    <Form.Group id="apart">
                        <Form.Label>Apartment</Form.Label>
                        <Form.Control type="text" ref={apartmentRef} required disabled={radioValue === '2'} />
                    </Form.Group>
                    <Form.Group id="house">
                        <Form.Label>House</Form.Label>
                        <Form.Control type="text" ref={houseRef} required disabled={radioValue === '1'} />
                    </Form.Group>
                    <Form.Group id="rooms">
                        <Form.Label>Number of rooms</Form.Label>
                        <Form.Control type="number" ref={roomsRef} min="1" max="10" required />
                    </Form.Group>
                    <Form.Group id="area">
                        <Form.Label>Area</Form.Label>
                        <Form.Row>
                            <Col>
                                <Form.Control type="number" ref={areaRef} min="30" required />
                            </Col>
                            <Col>
                                <Form.Label>sqm</Form.Label>
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group id="descr">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={descrRef} required />
                    </Form.Group>
                    <Form.Group id="pictures">
                        <Form.Label>Pictures</Form.Label>
                        <Form.Control type="file" ref={imagesRef} onChange={handleChange} accept="image/*" required multiple />
                    </Form.Group>
                    <Button type="submit" className="w-100">Add</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}