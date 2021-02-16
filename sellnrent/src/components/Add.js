import React, { useRef, useState } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';
import { db } from '../firebase'

export default function Add() {

    const cityRef = useRef();
    const addressRef = useRef();
    const roomsRef = useRef();
    const areaRef = useRef();
    const descrRef = useRef();

    const data = {
        city: null,
        address: null,
        rooms: null,
        area: null,
        descr: null
    }

    function handleSubmit() {
        data.city = cityRef.current.value;
        data.address = addressRef.current.value;
        data.rooms = roomsRef.current.value;
        data.area = areaRef.current.value;
        data.descr = descrRef.current.value;

        db.collection("posts").add(data);
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
                    <Form.Group id="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" ref={addressRef} required />
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
                    <Button type="submit" className="w-100">Add</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}