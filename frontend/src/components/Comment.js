import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import { Card, CardHeader, CardActions, CardContent } from '@material-ui/core'
import ActionBar from './ActionBar'
import { getCommentById } from '../selectors/comments'
import { formatDate } from '../utils/helper';

class Comment extends Component {
    render() {
        const { classes, comment } = this.props
        return (
            <Card className={classes.comment_card} elevation={0}>
                <CardHeader
                    subheader={'Commented by ' + comment.author + ' on ' + formatDate(comment.timestamp)} />
                <CardContent>
                    {comment.body}
                </CardContent>
                <CardActions>
                    <ActionBar voteScore={comment.voteScore} mode={'Comment'} id={comment.id} />
                </CardActions>
            </Card>
        );
    }
}

Comment.propTypes = {
    id: PropTypes.string.isRequired
};

function mapStateToProps(state, { id }) {
    return { comment: getCommentById(state, id) }
}

export default withStyles(styles)(connect(mapStateToProps)(Comment));