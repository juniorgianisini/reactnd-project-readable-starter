import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'


class ActionBar extends Component {
    render() {
        const {classes} = this.props
        return (
            <div className="action-bar">
                <IconButton aria-label="Delete" className={classes.margin}>
                        <DeleteIcon fontSize="small" color="secondary" />
                </IconButton>
                <IconButton aria-label="Add" className={classes.margin}>
                    <AddIcon fontSize="small" />
                </IconButton>
            </div>
        );
    }
}

ActionBar.propTypes = {

};

export default withStyles(styles)(ActionBar);