import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Text flag</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Set ein tekst inn í formin, ella uploada ein .pdf fíl og vel hvat
            fyri flags skulu verða tá tú kannar tekstin fyri typo villir.
            <br />
            <br />
            Hetta programmi gjørdi eg so at eg á ein skjótan og lættan hátt
            kundi fáa mína bachelor uppgávu rættaða fyri dupult orð, ov nógv
            millumrúm og aðrar líknandi villur.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>CV</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            CV er eitt privat project sum eg fór ígongd við fyri at venja meg
            við React og Material UI. CV er ein síða har tú kann síggja mínar
            førleikar og kunning um meg. Her kann tú millum annað finna onnur
            projectir sum eg havi gjørt í mínari frítíð.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Disabled Expansion Panel
          </Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  )
}

export default PrivateRepo
