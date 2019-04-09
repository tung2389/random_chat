import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../App.css';

const initial_top = 590;
const initial_height = 50;
const initial_bottom_input = 20;

export default class Type_bar extends Component {
  componentDidMount(){
    let input_holder = ReactDOM.findDOMNode(this.refs.inp);
    // let input = ReactDOM.findDOMNode(this.refs.real_inp);
    input_holder.addEventListener("keydown",() => this.resize(input_holder));
  }
  resize(input_holder/*,input*/){
    // input_holder.height = 'auto';
    input_holder.style.height = input_holder.scrollHeight + 'px';
    input_holder.style.top = initial_top - (input_holder.scrollHeight - initial_height) + 'px';
    // input.style.bottom = initial_bottom_input + (input_holder.scrollHeight - initial_height) + (input.scrollHeight-20)  + 'px';
  }
  render() {
    return (
      <div> 
        <div className = "input2_holder" ref = "inp">
        {/* <div ref = "real_inp" className = "input_holder_2"> */}
        <TextField onChange = {this.props.change_message} className = "input2" multiline = "true"></TextField>
        {/* </div> */}
        </div>
        <div className = "btn_send_holder">
        <Fab color="primary" aria-label="Add">
        <AddIcon />
        </Fab>
        </div>
      </div>
    )
  }
}
