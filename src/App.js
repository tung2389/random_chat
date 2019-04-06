import React, { Component } from 'react';
import './App.css';
import Starting_page from './sub_component/Starting_page';
import Waiting_page from './sub_component/Waiting_page';
import Chat_page from './sub_component/Chat_page';
import io from 'socket.io-client';

const url = 'http://localhost:3001';
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
  }
  componentDidMount(){
    socket.on('please wait',this.handle_waiting);
    socket.on('starting chat',(data) => this.handle_match(data));
    socket.on('message');
    socket.on('Partner disconnected');
  }

  handle_waiting(){
    this.setState({main_component : <Waiting_page/>})
  }

  handle_match(data){
    this.setState({main_component : <Chat_page name = {data.name} room = {data.room} />})
  }

  change_name(e){
    this.setState({username : e.target.value});
  }

  connect(){
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
      <button onClick = {this.check}></button>
      </div>
    );
  }
}

export default App;
