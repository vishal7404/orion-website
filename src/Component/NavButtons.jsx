import React from 'react'
import { NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const NavButtons = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }} className="navButtonDiv">
            <Link to="/"><img style={{ width: "120px", marginTop: "10px", cursor: "pointer" }} src='https://test.mlmreadymade.com/Orion/Main/m130/or_34.png'></img></Link>
            <div className="btnDiv">
                <button className="btnPrimary navbtn">Login</button>
                {/* <a href="/register" className="btnPrimary navbtn">Registration</a> */}
                <Link to="/register" className="btnPrimary navbtn">Registration</Link>
                <Link to="/login" className="btnPrimary navbtn">View</Link>
                <a href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf" target="_blank" className="btnPrimary navbtn">Plan</a>
            </div>
        </div>
    )
}

export default NavButtons