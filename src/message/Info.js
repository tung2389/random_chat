import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import '../App.css';

const styles = {
    your_name: {
      'background': '#1976d2',
      'overflow-wrap': 'break-word',
      'display': 'inline-block',
      'border-radius': '4px',
      'color': 'white',
      'padding': '6px 24px'
    },
    partner_name: {
      'background': '#ffa000',
      'overflow-wrap': 'break-word',
      'display': 'inline-block',
      'border-radius': '4px',
      'color': 'white',
      'padding': '6px 24px'
    }
};

class Info extends Component {
  render() {
    const {Your_name, Partner_name,classes} = this.props;
    return (
      <div className = "Info">
        <Paper elevation={4} classes={{ root: classes.your_name }}>
        {Your_name}
        </Paper>
        <h3>And</h3>
        <Paper elevation={4} classes={{ root: classes.partner_name }}>
        {Partner_name}
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(Info);