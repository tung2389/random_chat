import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../App.css';

export default class Send_button extends Component {
  constructor(props){
      super(props);
  }
  handle_message(socket,message,update_all_message){
      //Send your message to partner
      socket.emit("send message",message);
      //Update your message in the screen
      update_all_message();
  }
  render() {
    const { socket, message, update_all_message} = this.props;
    // console.log(this.props);
    return (
        <div className = "btn_send_holder">
        <Fab onClick = {() => this.handle_message(socket,message,update_all_message)} color="primary" aria-label="Add">
        <AddIcon />
        </Fab>
        </div>
    )
  }
}
