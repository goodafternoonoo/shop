import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Card from './components/Card';

function App() {
    let [shoes] = useState(data);

    return (
        <div className='App'>
            <Navbar bg='light' variant='light'>
                <Container>
                    <Navbar.Brand href='#home'>ShoeShop</Navbar.Brand>
                    <Nav className='me-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#cart'>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='main-bg'></div>
            <Container>
                <Row>
                    {shoes.map((shoe) => (
                        <Card shoe={shoe} />
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default App;
