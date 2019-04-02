import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import Paper from '@material-ui/core/Paper';
import { getPostById } from '../selectors/posts'
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

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
                    <IconButton aria-label="Delete" className={classes.margin}>
                        <DeleteIcon fontSize="small" color="secondary" />
                    </IconButton>
                    <IconButton aria-label="Add" className={classes.margin}>
                        <AddIcon fontSize="small" />
                    </IconButton>
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