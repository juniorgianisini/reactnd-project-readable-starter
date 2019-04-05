import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import { Toolbar, Typography } from '@material-ui/core'

class ActionBar extends Component {
    render() {
        const { classes, voteScore, mode } = this.props
        return (
            <Toolbar variant="dense" className={classes.action_bar} disableGutters={true}>
                <IconButton aria-label="Up Vote Score" className={classes.margin}>
                    <ThumbUpIcon fontSize="small" />
                </IconButton>
                <Typography variant="subtitle2" color="textSecondary">
                    {voteScore}
                </Typography>
                <IconButton aria-label="Down Vote Score" className={classes.margin}>
                    <ThumbDownIcon fontSize="small" />
                </IconButton>
                {mode === 'Detail' &&
                    <IconButton aria-label="Add Comment" className={classes.margin}>
                        <AddCommentIcon fontSize="small" />
                    </IconButton>
                }
                {(!mode || mode === 'Detail') &&
                    <Fragment>
                        <IconButton aria-label="Edit" className={classes.margin}>
                            <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton aria-label="Delete" className={classes.margin}>
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    </Fragment>
                }
            </Toolbar>
        )
    }
}

ActionBar.propTypes = {
    mode: PropTypes.oneOf(['Detail', 'View']),
    voteScore: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
};

export default withStyles(styles)(ActionBar);