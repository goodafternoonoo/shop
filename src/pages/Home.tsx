import { Button, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import Card from '../components/Card.js';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import store, { setShoes } from '../store.js';

interface shoeType {
    shoes: { id: number; title: string; content: string; price: number }[];
}

export default function Home() {
    const [count, setCount] = useState(0);
    const [watched] = useState(localStorage.getItem('watched') || '[]');

    const { shoes }: shoeType = useSelector(
        (state: ReturnType<typeof store.getState>) => state
    );

    const dispatch = useDispatch();

    return (
        <>
            <div className='main-bg'>
                {watched &&
                    JSON.parse(watched).map((item: string) => (
                        <h4 key={item}>{item}</h4>
                    ))}
            </div>
            <Container>
                <Row>
                    {shoes.map((shoe) => (
                        <Card key={shoe.id} shoe={shoe} />
                    ))}
                </Row>
            </Container>
            {count < 2 && (
                <Button
                    onClick={() => {
                        axios
                            .get(
                                `https://codingapple1.github.io/shop/data${
                                    count + 2
                                }.json`
                            )
                            .then((response) => {
                                dispatch(
                                    setShoes([...shoes, ...response.data])
                                );

                                setCount((prev) => prev + 1);
                            })
                            .catch((error) => console.log(error));
                    }}
                >
                    더 보기
                </Button>
            )}
        </>
    );
}
