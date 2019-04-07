import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../App.css';

export default class Type_bar extends Component {
  render() {
    return (
      <div> 
        <div className = "input2_holder">
        <TextField onChange = {this.props.change_message} className = "input2"></TextField>
        </div>
        <div className = "btn_send_holder">
        <Fab color="primary" aria-label="Add">
        <AddIcon />
        </Fab>
        </div>
      </div>
    )
  }
}
