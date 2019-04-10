import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { getPostById } from "../selectors/posts";
import { Card, CardHeader, CardContent, CardActions } from "@material-ui/core";
import ActionBar from "./ActionBar";
import ListComments from "./ListComments";
import { formatDate, capitalizeString } from "./../utils/helper";
import { withRouter } from "react-router-dom";
import { handleChangeVotePost } from "../actions/posts";
import NewComment from "./NewComment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

class Post extends Component {
  handleUpVote = e => {
    e.preventDefault();
    const { post, dispatch } = this.props;
    dispatch(handleChangeVotePost(post.id, true));
  };

  handleDownVote = e => {
    e.preventDefault();
    const { post, dispatch } = this.props;
    dispatch(handleChangeVotePost(post.id, false));
  };

  handleAddComment = e => {
    e.preventDefault();
    this.newComment.handleOpenDialog();
  };

  render() {
    const { classes, post, editMode } = this.props;

    if (!post) {
      return null;
    }

    return (
      <Fragment>
        {editMode && (
          <Fab
            color="secondary"
            aria-label="Add"
            size="medium"
            className={classes.fab_header}
            onClick={e => this.handleAddComment(e)}>
            <AddIcon fontSize="default" />
          </Fab>
        )}
        <Card className={classes.post_card}>
          <CardHeader
            title={post.title}
            subheader={`Posted by ${post.author} on ${formatDate(
              post.timestamp
            )} in ${capitalizeString(post.category)} category.`}
          />
          {editMode && <CardContent>{post.body}</CardContent>}
          <CardActions>
            <ActionBar
              voteScore={post.voteScore}
              editMode={editMode}
              id={post.id}
              onUpVote={this.handleUpVote}
              onDownVote={this.handleDownVote}
            />
          </CardActions>
          {editMode && <ListComments postId={post.id} />}
        </Card>
        {editMode && <NewComment onRef={ref => (this.newComment = ref)} />}
      </Fragment>
    );
  }
}

Post.propTypes = {
  editMode: PropTypes.bool.isRequired,
  id: PropTypes.string
};

function mapStateToProps(state, { id, match }) {
  if (!id) {
    id = match.params.id;
  }
  return { post: getPostById(state, id) };
}

export default withRouter(withStyles(styles)(connect(mapStateToProps)(Post)));
