import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Jumbo = () => {
    return (
        <React.Fragment>
            <Jumbotron fluid style={{minHeight:'40px', maxHeight:'200px'}}>
                <Container style={{color:'#f4dfb9'}}>
                    <h1>Welcome</h1>
                    <p>
                        Everything for everyone...
                    </p>
                </Container>
            </Jumbotron>
        </React.Fragment>
    )
}

export default Jumbo
