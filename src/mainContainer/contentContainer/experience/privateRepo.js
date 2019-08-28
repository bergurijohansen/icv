import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Data from '../../../assets/data/data.js'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}))

const PrivateRepo = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {Data.privateProjects.map((item, index) => {
        return (
          <ExpansionPanel key={index}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>{item.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>{item.details}</Typography>
            </ExpansionPanelDetails>
            {item.link && (
              <ExpansionPanelDetails>
                <Typography>{<a href={item.link}>Go To Repo</a>}</Typography>
              </ExpansionPanelDetails>
            )}
          </ExpansionPanel>
        )
      })}
    </div>
  )
}

export default PrivateRepo
