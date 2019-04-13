import React, { Component } from 'react'
import Partner_message from '../message/Partner_message';
import Your_message from '../message/Your_message';
import Type_bar from '../message/Type_bar';
import Send_button from '../message/Send_button';
import Button from '@material-ui/core/Button';
import Exiting_notification from '../message/Exiting_nofitication';
import Info from '../message/Info';
import uuidv1 from 'uuid/v1';
import '../App.css';


export default class Chat_page extends Component {
  constructor(props){
    super(props);
    this.state = {
      message:"",
      all_message: [],
      partner_exit: false
    }
    this.change_message = this.change_message.bind(this);
    this.update_all_message = this.update_all_message.bind(this);
    this.notification = this.notification.bind(this);
    this.handle_exiting = this.handle_exiting.bind(this);
  }

  componentWillMount(){
    const { socket } = this.props;
    socket.on('message',(data) => this.update_all_message(Partner_message,data));
    socket.on('Partner disconnected',this.handle_exiting)
  }
  
  handle_exiting(){
    this.setState({partner_exit: true});
  }

  update_all_message(Component,data){
    let new_all_message = this.state.all_message.slice();
    new_all_message.push(<Component key = {uuidv1()} content = {data} />)
    this.setState({all_message: new_all_message});
  }

  change_message(new_message){
    this.setState({message:new_message});
    // console.log(new_message);
  }

  notification(){
    if(this.state.partner_exit){
      return <Exiting_notification />
    }
  }
  render() {
    const { classes } = this.props;
    const { socket } = this.props;
    const { exit } = this.props;
    const { your_name, partner_name } = this.props;
    
    return (
      <div>
      <Info Your_name = {your_name} Partner_name = {partner_name}/>

      <div className = "chat_background">

      {this.notification()}

      <div className = "all_messages">
      {this.state.all_message}
      </div>

      <div className = "bar_and_button" >
      <Type_bar change_message = {this.change_message}/>
      <Send_button socket = {socket} 
                   message = {this.state.message}
                   update_all_message = {() => this.update_all_message(Your_message,this.state.message)}
      />
      </div>

      <div className = "exit_button_holder">
      <Button color = "secondary" variant = "contained" onClick = {exit}>Leave the chat</Button>
      </div>

      </div>
      </div>
    )
  }
}
