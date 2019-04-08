import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import { getPostById } from '../selectors/posts'
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core'
import ActionBar from './ActionBar'
import ListComments from './ListComments'
import { formatDate, capitalizeString } from './../utils/helper';
import { withRouter } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { handleChangeVotePost } from '../actions/posts';

class Post extends Component {

    handleUpVote = (e) => {
        e.preventDefault()
        const {post, dispatch} = this.props
        dispatch(handleChangeVotePost(post.id, true))
    }

    handleDownVote = (e) => {
        e.preventDefault()
        const {post, dispatch} = this.props
        dispatch(handleChangeVotePost(post.id, false))
    }

    render() {
        const { classes, post, editMode } = this.props

        if (!post) {
            return null
        }

        return (
            <Card className={classes.post_card}>
                <CardHeader title={post.title}
                    subheader={`Posted by ${post.author} on ${formatDate(post.timestamp)} in ${capitalizeString(post.category)} category.`} />
                {editMode &&
                    <CardContent>
                        {post.body}
                    </CardContent>}
                <CardActions>
                    <ActionBar voteScore={post.voteScore} 
                               editMode={editMode} 
                               id={post.id}
                               onUpVote={this.handleUpVote}
                               onDownVote={this.handleDownVote}>
                        {editMode && <IconButton aria-label="Add Comment" className={classes.margin}>
                            <AddCommentIcon fontSize="small" />
                        </IconButton>}
                    </ActionBar>
                </CardActions>
                {editMode &&
                    <ListComments postId={post.id} />}
            </Card>
        );
    }
}

Post.propTypes = {
    editMode: PropTypes.bool.isRequired,
    id: PropTypes.string,
};

function mapStateToProps(state, { id, match }) {
    if (!id) {
        id = match.params.id
    }
    return { post: getPostById(state, id) }
}

export default withRouter(withStyles(styles)(connect(mapStateToProps)(Post)))
