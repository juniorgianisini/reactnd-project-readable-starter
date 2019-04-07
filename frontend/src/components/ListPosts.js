import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Post from './Post';
import { getPostsFilterOrderSelector } from '../selectors/posts'
import { Typography } from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'

class ListPost extends Component {
    render() {
        const { posts, classes } = this.props
        return (
            <div className={classes.posts}>
                {(!posts || posts.length === 0) ?
                    <Typography variant="overline" color="textSecondary">
                        No Posts
                        </Typography>
                    : posts.map(post =>
                        <Link key={post.id} to={`/${post.category}/${post.id}`} style={{ textDecoration: 'none' }}>
                            <Post id={post.id} editMode={false} />
                        </Link>
                    )}
            </div>
        );

    }
}


ListPost.propTypes = {
    category: PropTypes.string
};

function mapStateToProps(state, { category, match }) {
    let categoryId = category || match.params.id
    return {
        posts: getPostsFilterOrderSelector(state, {categoryId})
    }
}

export default withStyles(styles)(withRouter(connect(mapStateToProps)(ListPost)));