import { Button, Grid, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import './Home.css'

function Home() {
  return (
    <>
      <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }}>
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20} >
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#234148", fontWeight: "bold" }}>Oláááá!</Typography>
            <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#234148", fontWeight: "bold" }}>Expresse aqui os seus pensamentos e opiniões!</Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
            </Box>
            <Button variant="outlined" style={{ borderColor: "#5b7e86", backgroundColor: "#5b7e86", color: "white" }}>Ver Postagens</Button>
          </Box>
        </Grid>
        <Grid item xs={6} >
          <img src="https://www.kindpng.com/picc/m/149-1490227_transparent-mike-wazowski-clipart-sully-monsters-inc-png.png" alt="" />
        </Grid>
        <Grid xs={12} style={{ backgroundColor: "white" }}>
        </Grid>
      </Grid>
    </>
  )
}

export default Home