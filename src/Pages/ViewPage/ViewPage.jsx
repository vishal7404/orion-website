import React from 'react'
import { Container, Col, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import Footer from '../../Component/Footer/Footer'
import NavButtons from '../../Component/NavButtons'
const ViewPage = () => {
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
                            <input type="text" placeholder='BUSD WALLET'></input>
                            <button className="btnPrimary">View</button>
                            <p>Don't have an Account ?</p>
                            <Link style={{ color: "#F09C10" }} to="/register">Register</Link>
                        </div>
                    </Col>
                    <Col md="6" className="RegisterColRight">
                        <div className="registerLoginDiv">
                            <p>
                                Wallet not Connected.
                            </p>
                            <h3>Login to your Personal Account</h3>
                            <h4 style={{ wordSpacing: "3px", letterSpacing: "0.5px", marginBottom: "20px" }}>To access all the functions of your personal account
                                use Auto Login</h4>
                            <button className="btnPrimary">Automatic Login</button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </React.Fragment>
    )
}

export default ViewPage