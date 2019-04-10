import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../App.css';

export default class Send_button extends Component {
  constructor(props){
      super(props);
  }
  send_message(socket,message){
      socket.emit("send message",message);
  }
  render() {
    const { socket,message } = this.props;
    return (
        <div className = "btn_send_holder">
        <Fab color="primary" aria-label="Add">
        <AddIcon onClick = {() => this.send_message(socket,message)}/>
        </Fab>
        </div>
    )
  }
}
