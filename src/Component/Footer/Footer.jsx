import React from 'react'
import "./Footer.css"
import { Container, Col, Row } from "react-bootstrap"
import { FaTelegramPlane } from "react-icons/fa"
import Twitter from "./../../Images/twitter.png"
import Instagram from "./../../Images/instagram.png"
import Youtube from "./../../Images/youtube.png"
import Telegram from "./../../Images/telegram.png"
const Footer = () => {
    return (
        <React.Fragment>
            {/* <Container fluid style={{ background: '#383852' }}> */}
            <Container>
                <div className="footerDiv">
                    <img src='https://test.mlmreadymade.com/Orion/images/logo/orion_8.png'></img>
                    <div className="footerIconsDiv">
                        <img src={Telegram}></img>
                        <img src={Instagram}></img>
                        <img src={Twitter}></img>
                        <img src={Youtube}></img>
                    </div>
                </div>
                {/* </Container> */}
            </Container>
        </React.Fragment>
    )
}


export default Footer