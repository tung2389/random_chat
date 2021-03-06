import React, { Component } from 'react';
import './App.css';
import Starting_page from './random_chat_pages/Starting_page';
import Waiting_page from './random_chat_pages/Waiting_page';
import Chat_page from './random_chat_pages/Chat_page';
import io from 'socket.io-client';

const url = 'https://socket-backend.herokuapp.com/';
const socket = io(url);

class App extends Component {
  constructor(props){
    super(props);
    this.change_name = this.change_name.bind(this);
    this.connect = this.connect.bind(this);
    this.state = {
      username: '',
      main_component: <Starting_page change_name = {this.change_name} connect = {this.connect}/>
    };
    this.handle_waiting = this.handle_waiting.bind(this);
    this.handle_match = this.handle_match.bind(this);
    this.check = this.check.bind(this);
    this.exit = this.exit.bind(this);
  }
  componentDidMount(){
    socket.on('please wait',this.handle_waiting);
    socket.on('starting chat',(data) => this.handle_match(data));
  }

  handle_waiting(){
    this.setState({main_component : <Waiting_page/>})
  }

  handle_match(data){
    this.setState({main_component : <Chat_page your_name = {this.state.username} partner_name = {data.name} socket = {socket} exit = {this.exit}/>})
  }

  exit(){
    if(window.confirm("Do you really want to leave? You cannot see this conversation again")){
    this.setState({main_component: <Starting_page change_name = {this.change_name} connect = {this.connect}/>})
    socket.emit("Partner disconnected");
    }
  }

  change_name(e){
    this.setState({username : e.target.value});
  }

  connect(){
    this.setState({main_component : <Waiting_page/>})
    socket.emit('find partner',{name : this.state.username});
  }

  check(){
    console.log(this.state.username);
  }

  componentWillMount(){
    
  }
  render() {
    return (
      <div>
      {this.state.main_component}
      </div>
    );
  }
}

export default App;
