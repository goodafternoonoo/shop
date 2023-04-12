import { useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import store from '../store';

interface shoeType {
    shoes: { id: number; title: string; content: string; price: number }[];
}

export default function Detail() {
    const { shoes }: shoeType = useSelector(
        (state: ReturnType<typeof store.getState>) => state
    );
    

    const [count, setCount] = useState(2);
    const [alert, setAlert] = useState(true);
    const [tab, setTab] = useState(0);
    const [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => setFade('end'), 100);

        return () => {
            setFade('');
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setAlert(!alert);
        }, count * 1000);

        return () => {};
    }, []);

    const { id } = useParams();
    const shoe = shoes.find((shoe) => shoe.id === Number(id));

    return (
        <div className={`container start ${fade}`}>
            {alert && (
                <div className='alert alert-warning'>
                    {count}초 이내 구매시 할인
                </div>
            )}
            <div className='row'>
                <div className='col-md-6'>
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${
                            Number(id) + 1
                        }.jpg`}
                        width='100%'
                    />
                </div>
                <div className='col-md-6'>
                    <h4 className='pt-5'>{shoe?.title}</h4>
                    <p>{shoe?.content}</p>
                    <p>{(shoe?.price as number).toLocaleString()}원</p>
                    <button className='btn btn-danger'>주문하기</button>
                </div>
            </div>

            <Nav variant='tabs' defaultActiveKey='link-0'>
                <Nav.Item onClick={() => setTab(0)}>
                    <Nav.Link eventKey='link-0'>Option 1</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => setTab(1)}>
                    <Nav.Link eventKey='link-1'>Option 2</Nav.Link>
                </Nav.Item>
                <Nav.Item onClick={() => setTab(2)}>
                    <Nav.Link eventKey='link-2'>Option 3</Nav.Link>
                </Nav.Item>
            </Nav>
            {<TabContent tab={tab} />}
        </div>
    );
}

function TabContent({ tab }: { tab: number }) {
    const [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => setFade('end'), 100);

        return () => {
            setFade('');
        };
    }, [tab]);

    return (
        <div className={`start ${fade}`}>
            {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
        </div>
    );
}
