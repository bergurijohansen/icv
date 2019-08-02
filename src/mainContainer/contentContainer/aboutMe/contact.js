import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

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
            <Grid item>
              <Typography variant="caption">
                Reynsgøta 11 - 160 Argir
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                tlf: <a href="tel+00298259934">+298 259934</a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                email:{' '}
                <a href="mailto:bergurij@gmail.com">bergurij@gmail.com</a>
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                <a href="https://github.com/bergurijohansen">github</a>
              </Typography>
            </Grid>
          </Grid>
        </Typography>
      </Paper>
    </Grid>
  )
}

export default Contact
