import React from 'react'
import { Container } from 'react-bootstrap'

const Layout = (props) => {
    return (
       <Container style={{paddingBottom:"100px"}}>
           {props.children}
       </Container>
    )
}

export default Layout
