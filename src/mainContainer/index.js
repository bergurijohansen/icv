import React from 'react'
import ContentContainer from './contentContainer'
import { Container } from '@material-ui/core'

const MainContainer = () => {


  const style = {
    // background: 'linear-gradient(45deg, rgb(76, 0, 255), transparent), \
    //  repeating-linear-gradient(45deg, rgba(183, 0, 255) 0%, rgba(183, 0, 255) 5%, transparent 5%, transparent 10% ),\
    //   rgb(216, 118, 255) repeating-linear-gradient(-45deg, rgba(183, 0, 255, .5) 0%, rgba(183, 0, 255, .5) 5%, transparent 5%, transparent 10%)', 
    minHeight: '100vh',
    background: 'linear-gradient(45deg, rgb(0, 0, 0), transparent), \
     repeating-linear-gradient(45deg, rgba(3, 30, 60) 0%, rgba(3, 30, 60) 5%, transparent 5%, transparent 10% ),\
      rgb(216, 200, 180) repeating-linear-gradient(-45deg, rgba(3, 30, 60, .5) 0%, rgba(3, 30, 60, .5) 5%, transparent 5%, transparent 10%)', 
 
    }
  // const style = {
  //   background: 'rgb(34,193,195)',
  //   background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)' 
  // }


  return (
    // <div style={{ backgroundColor: '#EEEEE88' }}>
    <div style={style}>
      <Container maxWidth="md">
        <ContentContainer />
      </Container>
    </div>
  )
}

export default MainContainer
