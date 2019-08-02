import React from 'react'
import ContentContainer from './contentContainer'
import { Container } from '@material-ui/core'

const MainContainer = () => {
  return (
    <div style={{ backgroundColor: '#EEEEEE88' }}>
      <Container maxWidth="md">
        <ContentContainer />
      </Container>
    </div>
  )
}

export default MainContainer
