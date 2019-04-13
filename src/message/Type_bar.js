import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import '../App.css';

const initial_top = 45;
const initial_height = 50;
const max_in_one_row = 39;
const gap_between_line = 16;
const max_line = 4;
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
    this.setState({length:e.target.value.length});
    // console.log(e.target.value.length);
    change_message(e.target.value);
  }

  caculate_resize(distance,input_holder){

    // console.log(distance);
    if(distance <= max_line){
    //Expend height to the bottom
    input_holder.style.height = initial_height + gap_between_line * (distance - 1) + 'px';
    //Move the input up to get on well with the bottom
    input_holder.style.top = initial_top - gap_between_line * (distance - 1) + 'px';
    }

    else{
      input_holder.style.height = initial_height + gap_between_line * max_line - 20 + 'px';
      console.log(initial_height,gap_between_line,max_line);
      input_holder.style.top = initial_top - gap_between_line * (max_line + 1) + 20 + 'px' ;
      input_holder.style.overflow = 'auto';
      // console.log(input_holder.style.height);
    }
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
    this.caculate_resize(distance,input_holder);
    }
  }
  render() {
    return (
        <div className = "input2_holder" ref = "inp">
        <TextField onChange = {(e) => this.count_char(e,this.props.change_message)} className = "input2" multiline = {true}></TextField>
        </div>
    )
  }
}
