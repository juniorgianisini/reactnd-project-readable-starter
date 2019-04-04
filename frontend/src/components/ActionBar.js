import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import { Toolbar, Typography } from '@material-ui/core'


class ActionBar extends Component {
    render() {
        const { classes, voteScore } = this.props
        return (
            <Toolbar variant="dense" className={classes.action_bar} disableGutters={true}>
                <IconButton aria-label="Up" className={classes.margin}>
                    <ThumbUpIcon fontSize="small" />
                </IconButton>
                <Typography variant="subtitle2" color="textSecondary">
                    {voteScore}
                </Typography>
                <IconButton aria-label="Down" className={classes.margin}>
                    <ThumbDownIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="Edit" className={classes.margin}>
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="Delete" className={classes.margin}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Toolbar>
        )
    }
}

ActionBar.propTypes = {
    mode: PropTypes.oneOf(['Post', 'Comment']),
    voteScore: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
};

export default withStyles(styles)(ActionBar);