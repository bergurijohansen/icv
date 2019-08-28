import React from 'react'
import { Avatar, Chip, Grid, Paper, Typography } from '@material-ui/core'
import Data from '../../../assets/data/data'
const Courses = () => {
  return (
    <Paper style={{ padding: '1em' }}>
      <Typography variant="h5" style={{ textAlign: 'center' }}>
        KT lesturin
      </Typography>
      <Typography variant="body1">
        Í lestrinum havi eg havt nógv ymisk fak. Øll skeiðini eru 7.5 ECTs stig.
      </Typography>
      {/* <Hidden only={['sm', 'md', 'lg', 'xl']}>
        !!!To see a list turn to landscape
      </Hidden> */}
      <Grid container spacing={1}>
        {Data.courses.map((item, index) => {
          return (
            // <Hidden only={'xs'}>
            <Grid xs={12} xl={4} lg={4} sm={6} item>
              <Chip
                key={index}
                id={index}
                variant="outlined"
                color="primary"
                avatar={<Avatar>{item.avatar}</Avatar>}
                label={item.label}
              />
            </Grid>
            // </Hidden>
          )
        })}
      </Grid>
    </Paper>
  )
}

export default Courses
