import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { handleReceiveComments } from "../actions/comments";
import Comment from "./Comment";
import { getCommentIds } from "../selectors/comments";
import { Divider } from "@material-ui/core";

class ListComments extends Component {
  componentDidMount() {
    const { postId, dispatch } = this.props;
    dispatch(handleReceiveComments(postId));
  }

  render() {
    const { commentIds } = this.props;
    return (
      <Fragment>
        {commentIds && commentIds.length > 0 ? (
          <div>
            <Divider />
            {commentIds.map(id => (
              <Comment key={id} id={id} />
            ))}
          </div>
        ) : null}
      </Fragment>
    );
  }
}

ListComments.propTypes = {
  postId: PropTypes.string.isRequired
};

function mapStateToProps(state, { postId }) {
  return { commentIds: getCommentIds(state, postId) };
}

export default withStyles(styles)(connect(mapStateToProps)(ListComments));
