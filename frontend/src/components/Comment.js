import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { Card, CardHeader, CardActions, CardContent } from "@material-ui/core";
import ActionBar from "./ActionBar";
import { getCommentById } from "../selectors/comments";
import { formatDate } from "../utils/helper";
import { handleChangeVoteComment } from "../actions/comments";
import CommentIcon from "@material-ui/icons/Comment";
import NewComment from "./NewComment";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.newComment = React.createRef();
  }

  handleUpVote = e => {
    e.preventDefault();
    const { id, dispatch } = this.props;
    dispatch(handleChangeVoteComment(id, true));
  };

  handleDownVote = e => {
    e.preventDefault();
    const { id, dispatch } = this.props;
    dispatch(handleChangeVoteComment(id, false));
  };

  handleEdit = e => {
    e.preventDefault();
    const {comment} = this.props
    this.newComment.current.handleOpenDialog(comment, true);
  };

  handleRemove = e => {
    e.preventDefault();
    console.log("Remove");
  };

  render() {
    const { classes, comment } = this.props;
    return (
      <Card className={classes.comment_card} elevation={0}>
        <CardHeader
          avatar={<CommentIcon color="secondary" />}
          subheader={`Commented by ${comment.author} on ${formatDate(
            comment.timestamp
          )}`}
        />
        <CardContent>{comment.body}</CardContent>
        <CardActions>
          <ActionBar
            voteScore={comment.voteScore}
            id={comment.id}
            editMode={true}
            onUpVote={this.handleUpVote}
            onDownVote={this.handleDownVote}
            onEdit={this.handleEdit}
            onRemove={this.handleRemove}
          />
        </CardActions>
        <NewComment innerRef={this.newComment}/>
      </Card>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.string.isRequired
};

function mapStateToProps(state, { id }) {
  return { comment: getCommentById(state, id) };
}

export default withStyles(styles)(connect(mapStateToProps)(Comment));
