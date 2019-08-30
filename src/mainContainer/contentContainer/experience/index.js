import AppBar from '@material-ui/core/AppBar'
import Courses from './courses'
import PropTypes from 'prop-types'
import PrivateRepo from './privateRepo'
import React, { useEffect } from 'react'
import SchoolProjects from './schoolProjects'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import { Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Language from '../../../helpers/language'

function TabContainer(props) {
  return (
    <Typography
      component="div"
      style={{ paddingLeft: '2em', paddingRight: '2em', paddingTop: '0.3em' }}
    >
      {props.children}
    </Typography>
  )
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    // backgroundColor: theme.palette.background.paper,
    paddingTop: '1em',
  },
}))

const ScrollableTabsButtonAuto = () => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [batteryLevel, setBatteryLevel] = React.useState(1)
  const [batteryCharging, setBatteryCharging] = React.useState(false)

  useEffect(() => {
    const getData = async () => {
      const battery = await navigator.getBattery()
      setBatteryLevel(battery.level)
      setBatteryCharging(battery.charging)
    }
    getData()
  }, [batteryLevel, batteryCharging])

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          style={{ backgroundColor: '#FFFFFF' }}
          textColor="primary"
          variant="fullWidth"
          centered
          scrollButtons="auto"
        >
          <Tab label={Language('words', 'it')} />
          <Tab label="Privat projectir" />
          <Tab label="Skúla uppgávur" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <Courses />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <PrivateRepo />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <SchoolProjects />
        </TabContainer>
      )}
    </div>
  )
}

export default ScrollableTabsButtonAuto
