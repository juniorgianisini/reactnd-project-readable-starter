import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import Paper from '@material-ui/core/Paper';
import { getPostById } from '../selectors/posts'
import { Typography, Divider, Toolbar, Grid } from '@material-ui/core'
import ActionBar from './ActionBar'
import ListComments from './ListComments'
import { formatDate } from './../utils/helper';

class Post extends Component {
    render() {
        const { classes, post } = this.props
        return (
            <div>
                <Paper className={classes.post_paper}>
                    <Grid container className={classes.category_grid}>
                        <Grid item xs={11}>
                            <Typography variant="title" color="primary">
                                {post.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={1} justify="right">
                            <Typography variant="overline" color="textSecondary">
                                {post.category}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="subtitle2" color="textSecondary">
                        {formatDate(post.timestamp) + ' - ' + post.author}
                    </Typography>
                    <Typography variant="body1">
                        {post.body}
                    </Typography>
                    <ActionBar voteScore={post.voteScore} mode="Post" id={post.id} />
                    <ListComments postId={post.id} />
                </Paper>
            </div>
        );
    }
}

Post.propTypes = {
    id: PropTypes.string.isRequired
};

function mapStateToProps(state, { id }) {
    return { post: getPostById(state, id) }
}

export default withStyles(styles)(connect(mapStateToProps)(Post));