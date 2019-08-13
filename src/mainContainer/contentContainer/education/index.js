import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Data from '../../../assets/data/data'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    paddingTop: '1em',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

const Education = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {Data.personal.experience.map((item, index) => {
        return (
          <React.Fragment>
            <ExpansionPanel key={index}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  {item.title}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                  {item.description || ''}
                </Typography>
              </ExpansionPanelSummary>
              {item.values.map(value => {
                return (
                  <ExpansionPanelDetails>
                    <React.Fragment>
                      <Typography variant="body1">{value}</Typography>
                    </React.Fragment>
                  </ExpansionPanelDetails>
                )
              })}
            </ExpansionPanel>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Education
