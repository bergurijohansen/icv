import React, { Fragment } from 'react'
import AboutMe from './aboutMe'
import Experience from './experience'
import Contact from './contact'
import { Grid } from '@material-ui/core'

const ContentContainer = () => {
  
  return (
    <Fragment>
      <Grid container>
        <Grid item sm={12} md={12} lg={12} xl={12} xs={12} style={{ textAlign: "right", paddingRight: '2em', paddingTop: '1em', maxHeight: '1em' }}>
          <img src={'https://lipis.github.io/flag-icon-css/flags/4x3/fo.svg'} height="16ex" />
          {'        '}
          <img src={'https://lipis.github.io/flag-icon-css/flags/4x3/dk.svg'} height="16ex" />
        </Grid>
      </Grid>
      <Grid style={{ paddingTop: '3em' }} container>
        <AboutMe />
      </Grid>
      <Grid container>
        <Experience />
      </Grid>
      <Grid container>
        <Contact />
      </Grid>
    </Fragment>
  )
}

export default ContentContainer
