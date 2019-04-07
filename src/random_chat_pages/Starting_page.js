import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';

export default class Starting_page extends Component {
  render() {
    return (
      <div className = "center">
        <h6>Let connect with everyone</h6>
        <TextField onChange = {this.props.change_name} label = "Enter your name" className = "input"></TextField>
        <div className = "btn_holder"> 
        <Button color = "primary" variant = "contained" onClick = {this.props.connect}>Find friends</Button>
        </div>
      </div>
    )
  }
}
