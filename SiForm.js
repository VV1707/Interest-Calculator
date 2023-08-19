import React, { Component } from 'react';
import { CssBaseline,Button,Grid,MenuItem,FormControl,InputAdornment,Typography,Select,InputLabel,TextField} from '@mui/material';

class SiForm extends Component{
  constructor(props) {
    super(props)  
    this.state = {
       prinicial:'',
       period:'',
       rateOfInterest:'',
       monthOrYear:'',
       si:''
    }
  }
  changePeriodHandler=(event)=>{
    this.setState({
      period:event.target.value
    })
  }
  changePrincipalHandler=(event)=>{
    this.setState({
      prinicial:event.target.value
    })
  }
  changeRateOfInterestHandler=(event)=>{
    this.setState({
      rateOfInterest:event.target.value
    })
  }
  changeMonthOrYearHandler=(event)=>{
    this.setState({
      monthOrYear:event.target.value
    });
  }
  getSI=()=>{
    let output=((this.state.prinicial*this.state.period*this.state.rateOfInterest)/100);
    if(this.state.monthOrYear==='y'){
      this.setState({
        si:output.toFixed(2)
      })
    }
    else{
      this.setState({
        si:(output/12).toFixed(2)
      })
    }

  }
  render(){
  return (
  <div>
    <CssBaseline />
    <Grid container xs display="flex" minHeight={450} justifyContent="center" 
      alignItems="center" style={{position:"absolute"}}>
      <FormControl>
        <Typography variant="h4" color="primary" gutterBottom>SIMPLE INTEREST CALCULATOR</Typography><br/>
        <TextField label="Principal Amount" required inputProps={{min:0}} type={"number"} 
          step={"any" } variant='outlined' size="medium" color="primary" 
          InputProps={{endAdornment:<InputAdornment position="end">₹</InputAdornment>}}
          value={this.state.prinicial} onChange={this.changePrincipalHandler}/><br/>
        <TextField label="Rate of Interest" required inputProps={{min:0}} type={"number"} 
          step={"any" } variant='outlined' size="medium" color="primary" 
          InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}
          value={this.state.rateOfInterest} onChange={this.changeRateOfInterestHandler}/><br/>
        <div className='side-by-side' display='flex' flex-direction='row'>
          <FormControl sx={{maxWidth:320, pr:2}}>
          <TextField label="Period" required inputProps={{min:0}} type={"number"} 
            step={"any" } variant='outlined' size="medium" color="primary" 
            value={this.state.period} onChange={this.changePeriodHandler}/>
          </FormControl>
          <FormControl sx={{minWidth:304}}>
          <InputLabel id="term" required>Term</InputLabel>
          <Select value={this.state.monthOrYear} label="Term" onChange={this.changeMonthOrYearHandler}>
            <MenuItem value={'y'}>Yearly</MenuItem>
            <MenuItem value={'m'}>Monthly</MenuItem>
          </Select>
          </FormControl>  
        </div><br/>
        <Grid container xs display="flex" justifyContent="center" alignItems="center">
        <Button variant="contained" color="primary" size="large" type="submit" 
                onClick={this.getSI}>SUBMIT</Button>
        </Grid><br/>
      <FormControl sx={{textAlign:"center"}} >
      <Typography variant="subtitle1" color="primary" gutterBottom>₹ {this.state.si}</Typography>
      </FormControl>
      </FormControl>
    </Grid>
  </div>
  )
}
}

export default SiForm