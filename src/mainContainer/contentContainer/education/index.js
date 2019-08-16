import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core'
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
              <Table>
                <TableBody>
                  {item.values.map(value => {
                    return (
                      <TableRow>
                        <Grid container>
                          <Grid sm={4} xs={4} lg={3} xl={3} md={3}>
                            <TableCell style={{ borderBottomStyle: 'none' }}>
                              {value.year}
                            </TableCell>
                          </Grid>
                          <Grid sm={8} xs={8} lg={9} xl={9} md={9}>
                            <TableCell style={{ borderBottomStyle: 'none' }}>
                              {value.description}
                            </TableCell>
                          </Grid>
                        </Grid>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </ExpansionPanel>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Education
