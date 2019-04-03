import React, { Component } from 'react';
import './App.css';
import Starting_page from './sub_component/Starting_page';
import io from 'socket.io-client';
const url = 'http://localhost:3001';
class App extends Component {
  componentDidMount(){
    const socket = io('http://localhost:3001');
  }
  render() {
    return (
      <div>
      <Starting_page/>
      </div>
    );
  }
}

export default App;
