import './App.css';

import { Container, Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { lazy, Suspense, useState, useTransition } from 'react';
import axios from 'axios';

const Home = lazy(() => import('./pages/Home'));
const Detail = lazy(() => import('./pages/Detail'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
    const navigate = useNavigate();

    const result = useQuery('query', () =>
        axios
            .get('https://codingapple1.github.io/userdata.json')
            .then((response) => {
                return response.data;
            })
    );

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
                    <Nav className='ms-auto'>
                        {result.isLoading ? '로딩중' : result.data.name}
                    </Nav>
                </Container>
            </Navbar>
            <Suspense fallback={<div>로딩중</div>}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/detail/:id' element={<Detail />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='*' element={<div>404</div>}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
