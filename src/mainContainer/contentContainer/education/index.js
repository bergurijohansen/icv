import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Prógv</Typography>
          <Typography className={classes.secondaryHeading}>
            Skúlar og skeiðir
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant="body1">
            1995 - 2005: Argjaskúli <br />
            2005 - 2008: HTX á Tekniska Studentarskúla í Klaksvík <br />
            2016 - 2019: KT-Verkfróði á Fróðskaparsetur Føroya <br />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Arbeiði</Typography>
          <Typography className={classes.secondaryHeading}>
            Arbeiðs royndir
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            2006 - 2008: Arbeidi lestrarstarv hjá Kósini meðan eg gekk í skúla.
            <br />
            2008 - 2016: Arbeidi hjá VestSalmon sum seinri varð keypt av
            Bakkafrosti.
            <br />
            2018- : Lestrar starv hjá TechCare
            <br />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Eyka</Typography>
          <Typography className={classes.secondaryHeading}>
            Loyvisbrøv v.m.
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ul>
            <li>
              <Typography>Koyrikort</Typography>
            </li>
            <li>
              <Typography>Trukk loyvi</Typography>
            </li>
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Education
