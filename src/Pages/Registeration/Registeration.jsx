import React from 'react'
import "./Registeration.css"
import NavButtons from '../../Component/NavButtons'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../../Component/Footer/Footer'
import { Link } from 'react-router-dom'
const Registeration = () => {
    return (
        <React.Fragment>
            <Container
            >
                <NavButtons />
                <Row className="RegisterRow">
                    <Col md="6" className="RegisterColLeft">
                        <div className="registerDiv">
                            <h4>To view your account
                                specify <br /> ID or BUSD wallet</h4>
                            <input type="text" placeholder='123456789'></input>
                            <button className="btnPrimary">Register</button>
                            <p>Already have an account ?</p>
                            <Link style={{ color: "#F09C10" }} to="/login">Login</Link>
                        </div>
                    </Col>
                    <Col md="6" className="RegisterColRight">
                        <div className="registerLoginDiv ">
                            <h3 style={{ marginBottom: "50px" }}>About Orion</h3>
                            <h4 style={{ wordSpacing: "3px", letterSpacing: "0.5px" }}>Orion is the World's First successful P2P financial help providing System It isbased on the world famous decentralised blockChain Technology.</h4>
                        </div>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    )
}

export default Registeration