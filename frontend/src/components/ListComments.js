import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import {handleReceiveComments} from '../actions/comments'
import Comment from './Comment'
import { getCommentIds } from '../selectors/comments'
import { Divider, Typography } from '@material-ui/core';

class ListComments extends Component {

    componentDidMount(){
        const {postId, dispatch} = this.props
        dispatch(handleReceiveComments(postId))
    }

    render() {
        const {commentIds, classes} = this.props
        return (
            <div className={classes.comments}>
                {(!commentIds || commentIds.length === 0) ?
                    <Typography variant="overline" color="textSecondary">
                        No Comments
                    </Typography>
                :   <Fragment>
                        <Typography variant="overline" color="textSecondary">
                            {commentIds.length} comments
                        </Typography>
                        <Divider/>
                        {commentIds.map(id => <Comment key={id} id={id} />)}
                    </Fragment>
                }
            </div>
        );
    }
}

ListComments.propTypes = {
    postId: PropTypes.string.isRequired
};

function mapStateToProps(state, {postId}) {
    return { commentIds: getCommentIds(state, postId) }
}

export default withStyles(styles)(connect(mapStateToProps)(ListComments));