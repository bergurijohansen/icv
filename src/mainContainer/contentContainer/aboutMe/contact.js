import React from 'react'
import { Grid, Hidden, Paper, Typography } from '@material-ui/core'
import Data from '../../../assets/data/data'

const Contact = () => {
  return (
    <Grid
      lg={12}
      xl={12}
      md={12}
      sm={12}
      xs={12}
      style={{ paddingTop: '1em' }}
      item
    >
      <Paper style={{ padding: 8 * 3 }}>
        <Typography style={{ textAlign: 'center' }} variant="h4">
          Contact
        </Typography>
        <Typography
          style={{ padding: 8 * 3, textAlign: 'justify' }}
          variant="body1"
        >
          <Grid container justify="space-around">
            <Grid item xs={12} sm={2} md={3} xl={3} lg={3}>
              <Typography style={{ textAlign: 'center' }} variant="body1">{`${
                Data.personal.city
              } - ${Data.personal.country}`}</Typography>
            </Grid>
            <Hidden only={['xs']}>|</Hidden>
            <Grid item xs={12} sm={2} md={2} xl={3} lg={2}>
              <Typography style={{ textAlign: 'center' }} variant="body1">
                {/* tlf:{' '} */}
                <a href={`tel:${Data.personal.mobilelink}`}>
                  {Data.personal.moblie}
                </a>
              </Typography>
            </Grid>
            <Hidden only={'xs'}>|</Hidden>
            <Grid item xs={12} sm={2} md={2} xl={3} lg={2}>
              <Typography style={{ textAlign: 'center' }} variant="body1">
                {/* email:{' '} */}
                <a href={`mailto:${Data.personal.email}`}>
                  {Data.personal.email}
                </a>
              </Typography>
            </Grid>
            <Hidden only={['xs']}>|</Hidden>
            <Grid item xs={12} sm={2} md={3} xl={3} lg={2}>
              <Typography style={{ textAlign: 'center' }} variant="body1">
                <a href={Data.personal.github}>github</a>
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Contact
