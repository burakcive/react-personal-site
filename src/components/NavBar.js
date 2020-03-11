import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'


const NavBar = (props) => {
    const { location } = props;

    return (
        <div>
            <Nav style={{backgroundColor : '#092339'}} className="justify-content-center">
                <Nav.Item>
                    <span className="nav-link" role="button">  <Link className={location.pathname === "/" ? "active" : ""} to='/'>Blog</Link> </span>
                </Nav.Item>
                <Nav.Item>
                    <span className="nav-link" role="button">  <Link className={location.pathname === "/contact" ? "active" : ""} to='/contact'>Projects</Link> </span>
                </Nav.Item>
                <Nav.Item>
                    <span className="nav-link" role="button">  <Link className={location.pathname === "/about" ? "active" : ""} to='/about'>About</Link>    </span>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default withRouter(NavBar) 
