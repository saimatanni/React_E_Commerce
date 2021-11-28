import React from 'react'
import styled from 'styled-components'

const Container =styled.div({
    height:'30px',
    backgroundColor:'teal',
    color:"white",
    display:'flex',
    fontSize:'14px',
    alignItems:'center',
    justifyContent:"center",
    fontWeight:"bold"

})

const Announcement = () => {
    return (
        <Container>
            Supper deal free shipping
        </Container>
    )
}

export default Announcement
