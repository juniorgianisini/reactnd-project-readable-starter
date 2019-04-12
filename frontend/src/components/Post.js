import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { getPostById } from "../selectors/posts";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography
} from "@material-ui/core";
import ActionBar from "./ActionBar";
import ListComments from "./ListComments";
import { formatDate, capitalizeString } from "./../utils/helper";
import { withRouter } from "react-router-dom";
import { handleChangeVotePost, handleRemovePost } from "../actions/posts";
import NewComment from "./NewComment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import NewPost from "./NewPost";

class Post extends Component {
  constructor(props) {
    super(props);
    this.newComment = React.createRef();
    this.newPost = React.createRef();
  }

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
    this.newComment.current.handleOpenDialog(undefined, false);
  };

  handleEdit = e => {
    e.preventDefault();
    const { post } = this.props;
    this.newPost.current.handleOpenDialog(undefined, post, true);
  };

  handleRemove = e => {
    e.preventDefault();
    const { post, dispatch, history } = this.props;
    dispatch(handleRemovePost(post));
    history.goBack()
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
            title="New Comment"
            className={classes.fab_header}
            onClick={e => this.handleAddComment(e)}
          >
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
              onEdit={this.handleEdit}
              onRemove={this.handleRemove}
            />
          </CardActions>
          <div className={classes.comments}>
            <Typography variant="overline" color="textSecondary">
              {post.commentCount > 0
                ? `${post.commentCount} comments`
                : "No Comments in this post"}
            </Typography>
            {editMode && <ListComments postId={post.id} />}
          </div>
        </Card>
        <NewComment innerRef={this.newComment} postId={post.id}/>
        <NewPost innerRef={this.newPost} />
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
