import React, { Component } from 'react'

export default class Chat_page extends Component {
  render() {
    return (
      <div align = "center">
        your partner is {this.props.name} and your room is {this.props.room}
      </div>
    )
  }
}
