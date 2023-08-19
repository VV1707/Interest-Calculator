import React, { Component } from 'react'
import { CssBaseline,Button,Grid,MenuItem,FormControl,InputAdornment,Typography,Select,InputLabel,TextField} from '@mui/material';

class CiForm extends Component {

  constructor(props) {
    super(props)  
    this.state = {
       prinicial:'',
       period:'',
       rateOfInterest:'',
       n:'',
       ci:''
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
  changeTermHandler=(event)=>{
    this.setState({
      n:event.target.value
    })
  }
  getCI=()=>{
    let val1=(this.state.rateOfInterest/100);
    let val2=this.state.n*this.state.period;
    this.setState({
        ci:this.state.prinicial*((1+(val1/this.state.n))**(val2))
      })

    }

  render() {
    return (
      <div>
        <CssBaseline />
        <Grid container xs display="flex" flexDirection={'column'} minHeight={450} justifyContent="center" 
          alignItems="center" style={{position:"absolute"}}>
            <Typography sx={{mt:2}} variant="h4" color="primary" gutterBottom>COMPOUND INTEREST CALCULATOR</Typography><br/>
          <FormControl sx={{maxWidth:400}}>
            <TextField label="Principal Amount" required inputProps={{min:0}} type={"number"} 
              step={"any" } variant='outlined' size="medium" color="primary" 
              InputProps={{endAdornment:<InputAdornment position="end">₹</InputAdornment>}}
              value={this.state.prinicial} onChange={this.changePrincipalHandler}/><br/>
            <TextField label="Rate of Interest" required inputProps={{min:0}} type={"number"} 
              step={"any" } variant='outlined' size="medium" color="primary" 
              InputProps={{endAdornment:<InputAdornment position="end">%</InputAdornment>}}
              value={this.state.rateOfInterest} onChange={this.changeRateOfInterestHandler}/><br/>
            <div className='side-by-side' display='flex' flex-direction='row'>
              <FormControl sx={{maxWidth:200, pr:2}}>
              <TextField label="Period" required inputProps={{min:0}} type={"number"} 
                step={"any" } variant='outlined' size="medium" color="primary" 
                value={this.state.period} onChange={this.changePeriodHandler}/>
              </FormControl>
              <FormControl sx={{minWidth:200}}>
              <InputLabel id="term" required>Term</InputLabel>
              <Select value={this.state.n} label="Term" onChange={this.changeTermHandler}>
                <MenuItem value={1}>Yearly</MenuItem>
                <MenuItem value={2}>Semi-Annually</MenuItem>
                <MenuItem value={4}>Quarterly</MenuItem>
                <MenuItem value={6}>Bi-Monthly</MenuItem>
                <MenuItem value={12}>Monthly</MenuItem>
                <MenuItem value={24}>Semi-Monthly</MenuItem>
              </Select>
              </FormControl>  
            </div><br/>
            <Grid container xs display="flex" justifyContent="center" alignItems="center">
            <Button variant="contained" color="primary" size="large" type="submit" 
                    onClick={this.getCI}>SUBMIT</Button>
            </Grid><br/>
          <FormControl sx={{textAlign:"center"}} >
          <Typography variant="subtitle1" color="primary" gutterBottom>₹ {this.state.ci}</Typography>
          </FormControl>
          </FormControl>
        </Grid>
      </div>
      )
  }
}

export default CiForm