import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core'
import ActionBar from './ActionBar'
import { getCommentById } from '../selectors/comments'

class Comment extends Component {
    render() {
        const {classes, comment} = this.props
        return (
            <div>
                <Paper className={classes.comment_paper} elevation={0}>
                    <Typography variant="subtitle2" color="textSecondary">
                        {comment.author}
                    </Typography>
                    <Typography variant="body1">
                        {comment.body}
                    </Typography>
                    {//<ActionBar/>
                    }
                </Paper>
            </div>
        );
    }
}

Comment.propTypes = {
    id: PropTypes.string.isRequired
};

function mapStateToProps(state, {id}) {
    return { comment: getCommentById(state, id) }
}

export default withStyles(styles)(connect(mapStateToProps)(Comment));