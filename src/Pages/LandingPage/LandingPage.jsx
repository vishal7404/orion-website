import React from 'react';
import { useEffect, useState } from 'react';
import "./LandingPage.css"
import { FiLogIn } from "react-icons/fi"
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import TextAccourdion from '../../Component/TextAccourdion';
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router-dom';
const LandingPage = () => {
    AOS.init({
        duration: 800,
        easing: 'ease-in-sine',

    }); useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }
    const { height, width } = useWindowDimensions();
    return (
        <React.Fragment>

            <div className="context">
                <div data-aos="zoom-in">
                    <img src="https://test.mlmreadymade.com/Orion/Main/m130/or_34.png" alt="" />
                </div>
                <div className="btnDiv">
                    <button className="btnPrimary">Login</button>
                    <Link to="/register" className="btnPrimary">Registration</Link>
                    <Link to="/login" className="btnPrimary">View</Link>
                    <a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf" className="btnPrimary" target="_blank">Plan</a>
                    {/* <button className="btnPrimary">Plan</button> */}
                </div>
            </div>
            <Container className="owlCarouselDiv">
                <OwlCarousel items={width > 767 ? 2 : 1}
                    className="owl-theme"
                    loop
                    margin={8}
                    autoplay={true}
                    autoplayTimeout={2000}
                    autoplayHoverPause={true}
                >
                    <div className='aboutDiv' >
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi tempora dolore odit numquam expedita perferendis repellendus impedit, a illo pariatur architecto dolorum ut, assumenda fuga ipsa nihil nostrum sequi veritatis.</p>
                    </div>
                    <div className='aboutDiv' >
                        <h3>Mission</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi tempora dolore odit numquam expedita perferendis repellendus impedit, a illo pariatur architecto dolorum ut, assumenda fuga ipsa nihil nostrum sequi veritatis.</p>
                    </div>
                    <div className='aboutDiv' >
                        <h3>Vision</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi tempora dolore odit numquam expedita perferendis repellendus impedit, a illo pariatur architecto dolorum ut, assumenda fuga ipsa nihil nostrum sequi veritatis.</p>
                    </div>
                    <div className='aboutDiv' >
                        <h3>Strategy</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi tempora dolore odit numquam expedita perferendis repellendus impedit, a illo pariatur architecto dolorum ut, assumenda fuga ipsa nihil nostrum sequi veritatis.</p>
                    </div>
                </OwlCarousel>
            </Container>

            <Container className="headingWithTextContainer">
                <Row>
                    <Col md="6">
                        <div data-aos="fade-right">
                            <div className='headingWithText' >
                                <h3>Decentralized </h3>
                                <p>No one, not even the creators of the code, can make changes to the work of Orion smart contracts.</p>
                            </div></div>
                    </Col>
                    <Col md="6">
                        <div data-aos="fade-left">
                            <div className='headingWithText' >
                                <h3>Fully Automatic</h3>
                                <p>All transactions between community members take place directly from one personal wallet to another. Participants do not have accounts within the system from which to withdraw funds, since Orion does not store your assets.</p>
                            </div></div>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <div data-aos="fade-right">
                            <div className='headingWithText' >
                                <h3>Transparent</h3>
                                <p>The smart contract is public. Anyone can see the code and the entire transaction history. This guarantees the integrity of the system and real project statistics.</p>
                            </div></div>
                    </Col>
                    <Col md="6">
                        <div data-aos="fade-left">
                            <div className='headingWithText' >
                                <h3>Unchanged</h3>
                                <p>The algorithm is stored on the blockchain, so no one, even the authors of the idea, can intervene, cancel or change your transactions.</p>
                            </div></div>
                    </Col>
                </Row>
            </Container>
            <Container className="AccordionContainer">
                <h2 id="AccordionHeading">Frequently asked Questions</h2>
                <TextAccourdion />
            </Container>
            <div className="area" >
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >

        </React.Fragment >
    )
}

export default LandingPage