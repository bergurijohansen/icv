import React, { Fragment } from 'react'
import AboutMe from './aboutMe'
import Experience from './experience'
import Contact from './contact'
import { Grid } from '@material-ui/core'

const ContentContainer = () => {
  
  const getData = async () => {
    // const headers = new Headers()
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    // headers.append('GET', 'POST', 'OPTIONS');
    try{

      const d = await fetch("https://statbank.hagstova.fo/resources/px/databases/H2/menu.xml",{
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
      )
      return d
    }catch(err){
      console.log(err);
      return {err: -1}
    }
  }
  let data = getData()
  

  
  return (
    <Fragment>
      <Grid style={{ paddingTop: '3em' }} container>
        <AboutMe />
      </Grid>
      <Grid container>
        <Experience />
      </Grid>
      <Grid container>
        <Contact />
      </Grid>
      <Grid>
        <pre>
          {JSON.stringify(data, null, 2)}
          {console.log('data er : ', data)}
          {console.log('data.body er : ', data[0])}
        </pre>
      </Grid>
    </Fragment>
  )
}

export default ContentContainer
