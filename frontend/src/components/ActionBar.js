import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import { Toolbar, Typography } from '@material-ui/core'

class ActionBar extends Component {
    render() {
        const { classes, voteScore, editMode, onUpVote, onDownVote } = this.props
        return (
            <Toolbar variant="dense" className={classes.action_bar} disableGutters={true}>
                <IconButton aria-label="Up Vote Score" className={classes.margin} onClick={onUpVote}>
                    <ThumbUpIcon fontSize="small" />
                </IconButton>
                <Typography variant="subtitle2" color="textSecondary">
                    {voteScore}
                </Typography>
                <IconButton aria-label="Down Vote Score" className={classes.margin} onClick={onDownVote}>
                    <ThumbDownIcon fontSize="small" />
                </IconButton>
                {editMode &&
                    <Fragment>
                        <IconButton aria-label="Edit" className={classes.margin}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="Delete" className={classes.margin}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Fragment>
                }
                {
                    this.props.children
                }
            </Toolbar>
        )
    }
}

ActionBar.propTypes = {
    editMode: PropTypes.bool.isRequired,
    voteScore: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    onUpVote: PropTypes.func.isRequired,
    onDownVote: PropTypes.func.isRequired
};

export default withStyles(styles)(ActionBar)