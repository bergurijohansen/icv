import React, { Fragment } from 'react'
import AboutMe from './aboutMe'
import Test from './test'
import Contact from './aboutMe/contact'
import { Grid } from '@material-ui/core'

const ContentContainer = () => {
  return (
    <Fragment>
      <Grid style={{ paddingTop: '3em' }} container>
        <AboutMe />
      </Grid>
      <Grid container>
        <Test />
      </Grid>
      <Grid container>
        <Contact />
      </Grid>
    </Fragment>
  )
}

export default ContentContainer
