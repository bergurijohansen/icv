import React, { Fragment } from 'react'
import { Grid, Divider, Paper, Typography } from '@material-ui/core'
import Education from '../education'
import Data from '../../../assets/data/data'

const AboutMe = () => {
  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid lg={4} xl={4} md={4} sm={6} xs={12} item>
          <img
            style={{ height: 'auto', width: '100%' }}
            src="https://www.techcare.fo/assets/employees/bergur.jpg"
            alt="portrait of Bergur"
          />
        </Grid>
        <Grid lg={8} xl={8} md={8} sm={6} xs={12} item>
          <Paper>
            <Typography style={{ textAlign: 'center' }} variant="h4">
              Um meg
            </Typography>
            <Typography
              style={{ padding: 8 * 3, textAlign: 'justify' }}
              variant="body1"
            >
              {Data.personal.aboutMe}
            </Typography>
          </Paper>
          <Divider />
          <Education />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default AboutMe
