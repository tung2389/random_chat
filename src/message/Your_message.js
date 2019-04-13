import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import '../App.css'
const styles = {
  partner_message: {
    'max-width': '400px',
    'background': 'cornflowerblue',
    'overflow-wrap': 'break-word',
    'display': 'inline-block',
    'border-radius': '8px',
    'color': 'white',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'padding-right': '20px',
    'padding-left': '20px'
  }
};

class Your_message extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className = "Your_message" align = "right">
      {/* your partner is {this.props.name} and your room is {this.props.room} */}
      <Paper elevation={4} classes={{ root: classes.partner_message }}>
      {this.props.content}
    </Paper>
    </div>
    )
  }
}

export default withStyles(styles)(Your_message);