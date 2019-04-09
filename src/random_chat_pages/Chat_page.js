import React, { Component } from 'react'
import Partner_message from '../message/Partner_message';
import Your_message from '../message/Your_message';
import Type_bar from '../message/Type_bar';
import '../App.css';

export default class Chat_page extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className = "chat_background">
      <Partner_message/>
      <Your_message/>
      <Type_bar/>
      </div>
    )
  }
}
