import React, { Component } from 'react'
import Partner_message from '../message/Partner_message';
import Your_message from '../message/Your_message';
import Type_bar from '../message/Type_bar';
import Send_button from '../message/Send_button';
import '../App.css';

export default class Chat_page extends Component {
  constructor(props){
    super(props);
    this.state = {
      message:""
    }
    this.change_message = this.change_message.bind(this);
  }

  change_message(new_message){
    this.setState({message:new_message});
    console.log(new_message);
  }

  render() {
    const { classes } = this.props;
    const { socket } = this.props;
    return (
      <div className = "chat_background">
      <Partner_message/>
      <Your_message/>
      <Type_bar change_message = {this.change_message}/>
      <Send_button socket = {socket} message = {this.state.message}/>
      </div>
    )
  }
}
