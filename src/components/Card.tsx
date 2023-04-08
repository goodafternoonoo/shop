import { Col } from 'react-bootstrap';
import data from '../data.js';
import { useState } from 'react';

interface shoeType {
    shoe: { id: number; title: string; content: string; price: number };
}

export default function Card({ shoe }: shoeType) {
    return (
        <>
            <Col sm>
                <img
                    src={`https://codingapple1.github.io/shop/shoes${
                        shoe.id + 1
                    }.jpg`}
                    width={'80%'}
                />
                <h4>{shoe.title}</h4>
                <p>{shoe.content}</p>
            </Col>
        </>
    );
}
