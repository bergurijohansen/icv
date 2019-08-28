import React from 'react'
import { Divider, Grid, Paper, Typography } from '@material-ui/core'
import Data from '../../../assets/data/data'

const SchoolProjects = () => {
  return (
    <Grid container xl={12} lg={12} spacing={2}>
      {Data.schoolProjects.map((item, index) => {
        return (
          <Grid item xl={4} lg={4} key={index}>
            <Paper>
              <Typography variant="h5" style={{ textAlign: 'center' }}>
                {item.name}
              </Typography>
              <Typography variant="body1" style={{ padding: '0.3em' }}>
                {item.details}

                {item.link && (
                  <>
                    <br />
                    <br />
                    <Divider />
                    Go to <a href={item.link}>repo</a>
                  </>
                )}
              </Typography>
            </Paper>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default SchoolProjects
