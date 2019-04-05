import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import { getPostById } from '../selectors/posts'
import { Card, CardHeader, CardContent, CardActions } from '@material-ui/core'
import ActionBar from './ActionBar'
import ListComments from './ListComments'
import { formatDate } from './../utils/helper';

class Post extends Component {
    
    render() {
        const { classes, post, mode } = this.props
        return (
            <Card className={classes.post_card}>
                <CardHeader title={post.title}
                    subheader={'Posted by ' + post.author + ' on ' + formatDate(post.timestamp)} />
                {mode === 'Detail' && <CardContent>
                    {post.body}
                </CardContent>}
                <CardActions>
                    <ActionBar voteScore={post.voteScore} mode={mode} id={post.id} />
                </CardActions>
                {mode === 'Detail' &&
                <ListComments postId={post.id}/>}
            </Card>
        );
    }
}

Post.propTypes = {
    mode: PropTypes.oneOf(['Detail', 'View']).isRequired,
    id: PropTypes.string.isRequired
};

function mapStateToProps(state, { id }) {
    return { post: getPostById(state, id) }
}

export default withStyles(styles)(connect(mapStateToProps)(Post));