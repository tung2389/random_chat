import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

const styles = {
  partner_message: {
    'max-width': '400px',
    'background': 'aliceblue',
    'overflow-wrap': 'break-word',
    'display': 'inline-block',
    'border-radius': '8px',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'padding-right': '20px',
    'padding-left': '20px',
    'color': 'cadetblue'
  }
};

class Partner_message extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className = "Partner_message">
      {/* your partner is {this.props.name} and your room is {this.props.room} */}
      <Paper elevation={4} classes={{ root: classes.partner_message }}>
      {this.props.content}
    </Paper>
    </div>
    )
  }
}

export default withStyles(styles)(Partner_message);