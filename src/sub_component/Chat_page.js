import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  partner_message: {
    'max-width': '400px',
    'background': 'whitesmoke',
    'overflow-wrap': 'break-word',
    'display': 'inline-block'
  }
};

class Chat_page extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div align = "center">
        {/* your partner is {this.props.name} and your room is {this.props.room} */}
        <Paper elevation={6} classes={{ root: classes.partner_message }}>
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </Paper>
      <div>
      <Button>
        CSS Modules
      </Button>
      </div>
      </div>
    )
  }
}

export default withStyles(styles)(Chat_page);