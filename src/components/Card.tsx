import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface shoeType {
    shoe: { id: number; title: string; content: string; price: number };
}

export default function Card({ shoe }: shoeType) {
    const navigate = useNavigate();

    return (
        <>
            <Col sm onClick={() => navigate(`detail/${shoe.id}`)}>
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
