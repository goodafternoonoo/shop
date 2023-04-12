import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';
import { Routes, Route, useNavigate, Outlet } from 'react-router-dom';
import data from './data';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './pages/Cart';

function App() {
    const [shoes, setShoes] = useState(data);

    useEffect(() => {
        axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((response) => {
                setShoes([...shoes, ...response.data]);
            })
            .catch((error) => console.log(error));

        return () => {
            setShoes(data);
        };
    }, []);

    const navigate = useNavigate();

    return (
        <div className='App'>
            <Navbar bg='light' variant='light'>
                <Container>
                    <Navbar.Brand onClick={() => navigate('/')}>
                        ShoeShop
                    </Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/cart')}>
                            Cart
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/detail/:id' element={<Detail />} />

                <Route path='/cart' element={<Cart />} />

                <Route path='*' element={<div>404</div>}></Route>
            </Routes>
        </div>
    );
}

export default App;
