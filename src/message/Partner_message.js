import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  partner_message: {
    'max-width': '400px',
    'background': 'aliceblue',
    'overflow-wrap': 'break-word',
    'display': 'inline-block',
    'border-radius': '10px'
  }
};

class Partner_message extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div align = "left">
      {/* your partner is {this.props.name} and your room is {this.props.room} */}
      <Paper elevation={4} classes={{ root: classes.partner_message }}>
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </Paper>
    </div>
    )
  }
}

export default withStyles(styles)(Partner_message);