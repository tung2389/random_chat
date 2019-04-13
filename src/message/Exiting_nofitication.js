import React, { Component } from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    notification: {
      'width' : '550px',
      'background': '#d32f2f',
      'overflow-wrap': 'break-word',
      'display': 'inline-block',
      'border-radius': '4px',
      'color': 'white',
      'padding': '6px 24px'
    }
};

class Exiting_notification extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div className = "exiting_notification">
        <Paper elevation={4} classes={{ root: classes.notification }}>
        Your partner has disconnected. If you want to leave, please click the "Leave the chat" button
        </Paper>
        </div>
    )
  }
}

export default withStyles(styles)(Exiting_notification);
