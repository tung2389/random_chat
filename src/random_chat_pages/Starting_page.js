import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  positionStatic: {
    'height': '60px',
    'text-align': 'center',
    'background': 'deepskyblue'
  }
};

class Starting_page extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <AppBar position = "static" classes={{ root: classes.positionStatic }}> This app helps you to talk with a random person</AppBar>
      <div className = "center">
        <h6>Let connect with everyone</h6>
        <TextField onChange = {this.props.change_name} label = "Enter your name" className = "input"></TextField>
        <div className = "btn_holder"> 
        <Button color = "primary" variant = "contained" onClick = {this.props.connect}>Find friends</Button>
        </div>
      </div>
      <h6>Tips: if you don't find anyone or you are too lonely, you can open two or more chrome tabs to chat with yourself</h6>
      </div>
    )
  }
}

export default withStyles(styles)(Starting_page);
