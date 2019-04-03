import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import Paper from '@material-ui/core/Paper';
import { getPostById } from '../selectors/posts'
import { Typography, Divider } from '@material-ui/core'
import ActionBar from './ActionBar'
import ListComments from './ListComments'

class Post extends Component {
    render() {
        const {classes, post} = this.props
        return (
            <div>
                <Paper className={classes.post_paper}>
                    <Typography variant="title" color="textPrimary">
                        {post.title}
                    </Typography>
                    <Typography variant="subtitle2" paragraph="true" color="textSecondary">
                        {post.author}
                    </Typography>
                    <Typography variant="body1">
                        {post.body}
                    </Typography>
                    <ActionBar/>
                    <ListComments postId={post.id}/>
                </Paper>
            </div>
        );
    }
}

Post.propTypes = {
    id: PropTypes.string.isRequired
};

function mapStateToProps(state, {id}) {
    return { post: getPostById(state, id) }
}

export default withStyles(styles)(connect(mapStateToProps)(Post));