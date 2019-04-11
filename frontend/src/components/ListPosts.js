import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Post from "./Post";
import { getPostsFilterOrderSelector } from "../selectors/posts";
import { Typography } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import NewPost from "./NewPost";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Paper } from "@material-ui/core/Paper";

class ListPost extends Component {
  constructor(props) {
    super(props);
    this.newPost = React.createRef();
  }

  handleAddPost = () => {
    const { category } = this.props;

    if (this.newPost.current) {
      this.newPost.current.handleOpenDialog(category, undefined, false);
    }
  };

  render() {
    const { posts, classes } = this.props;
    return (
      <Fragment>
        <Fab
          color="secondary"
          aria-label="Add"
          size="medium"
          title="New Post"
          className={classes.fab_header}
          onClick={e => this.handleAddPost(e)}
        >
          <AddIcon fontSize="default" />
        </Fab>
        <NewPost innerRef={this.newPost} />
        <div className={classes.posts}>
          {!posts || posts.length === 0 ? (
            <Typography
              variant="overline"
              color="textSecondary"
              style={{ marginLeft: 15 }}
            >
              No Posts in this category
            </Typography>
          ) : (
            posts.map(post => (
              <Link
                key={post.id}
                to={`/${post.category}/${post.id}`}
                style={{ textDecoration: "none" }}
              >
                <Post id={post.id} editMode={false} />
              </Link>
            ))
          )}
        </div>
      </Fragment>
    );
  }
}

ListPost.propTypes = {
  category: PropTypes.string
};

function mapStateToProps(state, { category, match }) {
  let categoryId = category || match.params.id;
  return {
    posts: getPostsFilterOrderSelector(state, { categoryId })
  };
}

export default withStyles(styles)(
  withRouter(connect(mapStateToProps)(ListPost))
);
