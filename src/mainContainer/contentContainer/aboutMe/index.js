import React, { Fragment } from 'react'
import { Grid, Divider, Paper, Typography } from '@material-ui/core'
import Education from '../education'

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
              Eg eiti Bergur I. Johansen, eri 30 ár og undir útbúgving. Eg lesið
              KT-Verkfrøði á Fróðskaparsetri Føroya. Í verandi løtu búgvi eg á
              Argjum saman við mínari damu og 2 ára gomlu dóttur. Vit eru í
              gongd við at byggja okkum heim á Norðskála.
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
