import React, { Component } from 'react'
import Partner_message from '../message/Partner_message';
import Your_message from '../message/Your_message';
import Type_bar from '../message/Type_bar';
import Send_button from '../message/Send_button';
import uuidv1 from 'uuid/v1';
import '../App.css';

function make_deep_copy(arr){
  return JSON.parse(JSON.stringify(arr));
}

export default class Chat_page extends Component {
  constructor(props){
    super(props);
    this.state = {
      message:"",
      all_message: []
    }
    this.change_message = this.change_message.bind(this);
    this.update_all_message = this.update_all_message.bind(this);
    this.check = this.check.bind(this);
  }

  componentWillMount(){
    const { socket, handle_exiting } = this.props;
    socket.on('message',(data) => this.update_all_message(Partner_message,data));
    socket.on('Partner disconnected',() => handle_exiting());
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

  check(){
    console.log(this.state.all_message);
  }
  render() {
    const { classes } = this.props;
    const { socket } = this.props;
    return (
      <div className = "chat_background">
      {this.state.all_message}
      <Type_bar change_message = {this.change_message}/>
      <Send_button socket = {socket} 
                   message = {this.state.message}
                   update_all_message = {() => this.update_all_message(Your_message,this.state.message)}
      />
      </div>
    )
  }
}
