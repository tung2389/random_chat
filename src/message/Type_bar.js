import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../App.css';

const initial_top = 590;
const initial_height = 50;
const initial_bottom_input = 20;
const max_in_one_row = 67;
const gap_between_line = 16;

export default class Type_bar extends Component {
  constructor(props){
    super(props);
    this.state = {
      //length = 1 to prevent distance = 0
      length:1
    }
    this.count_char = this.count_char.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount(){
    let input_holder = ReactDOM.findDOMNode(this.refs.inp);
    // let input = ReactDOM.findDOMNode(this.refs.real_inp);
    input_holder.addEventListener("keydown",(event) => this.resize(event,input_holder));
  }

  count_char(e,change_message){
    //Prevent distance = 0
    if(e.target.value.length === 0)
    this.setState({length:e.target.value.length + 1});
    else
    this.setState({length:e.target.value.length + 1});
    // change_message(e.target.value);
  }

  resize(event,input_holder/*,input*/){
    //If Enter, block
    //console.log(gap_between_line * (Math.ceil(this.state.length / max_in_one_row)));
    if(event.keyCode === 13)
    {
      event.preventDefault();
    }
    else
    {
    let distance = Math.ceil(this.state.length / max_in_one_row);
    input_holder.style.height = initial_height + gap_between_line * (distance - 1) + 'px';
    input_holder.style.top = initial_top - gap_between_line * (distance - 1) + 'px';
    }
  }
  render() {
    return (
      <div> 
        <div className = "input2_holder" ref = "inp">
        <TextField onChange = {(e) => this.count_char(e,this.props.change_message)} className = "input2" multiline = "true"></TextField>
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
