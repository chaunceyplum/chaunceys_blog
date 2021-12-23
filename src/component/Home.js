import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import deskPic from '../img/deskPic.jpeg'

const Home = () => {
    return (
        <div >
            {/* <Container> */}
                <Row>
                    <img src={deskPic} alt={deskPic} />
                </Row>
                <Row className='text-center spacer'>
                    <Col xs={2} />
                    <Col xs={8}>
                        <br />
                        <h3>
                            Our Mission
                        </h3>

                        <br />

                        <h1>
                            Creating spaces that are comfortable, memorable and inspiring
                        </h1>

                        <br />

                        

                        <br />

                    </Col>
                    <Col xs={2} />
                    
                </Row>
                <br />
            {/* </Container> */}
        </div>
    )
}

export default Home
