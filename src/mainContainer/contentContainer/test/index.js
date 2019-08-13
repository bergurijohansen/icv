import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import {
  Tab,
  Paper,
  Grid,
  Divider,
  Chip,
  Avatar,
  Hidden,
} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Battery20 from '@material-ui/icons/Battery20'
import Battery30 from '@material-ui/icons/Battery30'
import Battery50 from '@material-ui/icons/Battery50'
import Battery60 from '@material-ui/icons/Battery60'
import Battery80 from '@material-ui/icons/Battery80'
import Battery90 from '@material-ui/icons/Battery90'
import BatteryFull from '@material-ui/icons/BatteryFull'
import BatteryChargingFull from '@material-ui/icons/BatteryChargingFull'
import BatteryCharging50 from '@material-ui/icons/BatteryCharging50'
import Data from '../../../assets/data/data'
import PrivateRepo from './privateRepo'

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

  const KT = e => {
    return (
      <Paper style={{ padding: '1em' }}>
        <Typography variant="h5" style={{ textAlign: 'center' }}>
          KT lesturin
        </Typography>
        <Typography variant="body1">
          Í lestrinum havi eg havt nógv ymisk fak. Øll skeiðini eru 7.5 ECTs
          stig.
        </Typography>
        <Hidden only={['sm', 'md', 'lg', 'xl']}>
          !!!To see a list turn to landscape
        </Hidden>
        <Grid container spacing={1}>
          {Data.courses.map((item, index) => {
            return (
              <Hidden only={'xs'}>
                <Grid xl={4} lg={4} sm={6} item>
                  <Chip
                    key={index}
                    id={index}
                    variant="outlined"
                    color="primary"
                    avatar={<Avatar>{item.avatar}</Avatar>}
                    label={item.label}
                  />
                </Grid>
              </Hidden>
            )
          })}
        </Grid>
      </Paper>
    )
  }

  const BatteryState = () => {
    const lvl = parseFloat(batteryLevel)
    console.log(`lvl ${lvl}`)

    if (lvl > 0.95 && batteryCharging) return <BatteryChargingFull />

    if (lvl <= 0.95 && batteryCharging) return <BatteryCharging50 />

    if (lvl > 0.9) return <Battery90 />

    if (lvl > 0.8 && lvl <= 0.9) return <Battery80 />

    if (lvl > 0.6 && lvl <= 0.7) return <Battery60 />

    if (lvl > 0.5 && lvl <= 0.6) return <Battery50 />

    if (lvl > 0.3 && lvl <= 0.5)
      return <Battery30 style={{ fill: '#ff0000' }} />

    if (lvl > 0.2 && lvl <= 0.3)
      return <Battery20 style={{ fill: '#ff0000' }} />

    return <BatteryFull />
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
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="KT" />
          <Tab label="Privat projectir" />
          <Tab label="Skúla uppgávur" />
          <Tab label="Item Four" />
        </Tabs>
      </AppBar>
      {value === 0 && (
        <TabContainer>
          <KT />
        </TabContainer>
      )}
      {value === 1 && (
        <TabContainer>
          <PrivateRepo />
        </TabContainer>
      )}
      {value === 2 && (
        <TabContainer>
          <Grid container xl={12} lg={12} spacing={2}>
            <Grid item xl={4} lg={4}>
              <Paper>
                <Typography variant="h5" style={{ textAlign: 'center' }}>
                  Flappy Bird
                </Typography>
                <Typography variant="body1" style={{ padding: '0.3em' }}>
                  Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief
                  iosdjsdijfoi jijoijfio jiajdsfj asdfj
                  iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj
                  hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj
                  jaosdij eijeoij oasidj iijf iosjiosdjf jiobla
                </Typography>
              </Paper>
            </Grid>
            <Grid item xl={4} lg={4}>
              <Paper>
                <Typography variant="h5" style={{ textAlign: 'center' }}>
                  Dino
                </Typography>
                <Typography variant="body1" style={{ padding: '0.3em' }}>
                  Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief
                  iosdjsdijfoi jijoijfio jiajdsfj asdfj
                  iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj
                  hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj
                  jaosdij eijeoij oasidj iijf iosjiosdjf jiobla
                </Typography>
              </Paper>
            </Grid>
            <Grid item xl={4} lg={4}>
              <Paper>
                <Typography variant="h5" style={{ textAlign: 'center' }}>
                  Game Engine
                </Typography>
                <Typography variant="body1" style={{ padding: '0.3em' }}>
                  Lorem ipsum ... bla bla skldjf j jskldfj lksdjf ief
                  iosdjsdijfoi jijoijfio jiajdsfj asdfj
                  iojsdfiojsiofjiosjiisdffioa jijaodjffi jdsiofjijjiosafj
                  hhogsadoif iosdjojidoisjfio asjdiofjsdiofj jfjeiofj4ijj
                  jaosdij eijeoij oasidj iijf iosjiosdjf jiobla
                  <br />
                  <br />
                  <Divider />
                  Go to{' '}
                  <a href="https://github.com/bergurijohansen/LudumGameEngine">
                    repo
                  </a>
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </TabContainer>
      )}
      {value === 3 && (
        <TabContainer>
          <Paper>
            <BatteryState />
            {batteryLevel * 100}%
          </Paper>
        </TabContainer>
      )}
    </div>
  )
}

export default ScrollableTabsButtonAuto
