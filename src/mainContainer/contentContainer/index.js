import React, { Fragment, useContext } from 'react'
import AboutMe from './aboutMe'
import Experience from './experience'
import Contact from './contact'
import { Grid, Button } from '@material-ui/core'
import Context from '../../context/context'


const ContentContainer = () => {
  const [state, dispatch] = useContext(Context)

  const languageHandler = (e) => {
    if (e.target.name) {
      dispatch({
        type: 'setLocals',
        locals: e.target.name
      })
    }
  }

  return (
    <Fragment>
      <Grid container>
        <Grid item sm={12} md={12} lg={12} xl={12} xs={12} style={{ textAlign: "right", paddingRight: '2em', paddingTop: '1em', maxHeight: '1em' }}>
          <Button onClick={languageHandler}>
            <img name="fo" src={'https://lipis.github.io/flag-icon-css/flags/4x3/fo.svg'} height="16ex" />
          </Button>
          <Button onClick={languageHandler}>
            <img name="dk" src={'https://lipis.github.io/flag-icon-css/flags/4x3/dk.svg'} height="16ex" />
          </Button>
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
