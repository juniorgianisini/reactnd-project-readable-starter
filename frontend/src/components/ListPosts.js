import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Post from "./Post";
import { getPostsFilterSelector } from "../selectors/posts";
import { Typography, Grid } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import NewPost from "./NewPost";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { getColumnsView } from "../selectors/view";
import { changeTitle } from "../actions/view";

class ListPost extends Component {
    constructor(props) {
        super(props);
        this.newPost = React.createRef();
    }

    componentDidMount() {
        const { dispatch, categoryId } = this.props;
        if (!categoryId) {
            dispatch(changeTitle("Home"));
        }
    }

    handleAddPost = () => {
        const { category } = this.props;

        if (this.newPost.current) {
            this.newPost.current.handleOpenDialog(category, undefined, false);
        }
    };

    render() {
        const { posts, classes, columnsView } = this.props;

        return (
            <Fragment>
                <Fab
                    color="secondary"
                    aria-label="Add"
                    size="medium"
                    title="New Post"
                    className={classes.fab_add}
                    onClick={e => this.handleAddPost(e)}
                >
                    <AddIcon fontSize="default" />
                </Fab>
                <NewPost innerRef={this.newPost} />
                <div>
                    {!posts || posts.length === 0 ? (
                        <Typography
                            variant="overline"
                            color="textSecondary"
                            style={{ marginLeft: 15 }}
                        >
                            No Posts in this category
                        </Typography>
                    ) : (
                        <Grid container className={classes.list_posts_grid}>
                            {posts.map(post => (
                                <Grid
                                    item
                                    key={post.id}
                                    xs={columnsView ? 6 : 12}
                                >
                                    <Link
                                        key={post.id}
                                        to={`/${post.category}/${post.id}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Post
                                            key={post.id}
                                            postId={post.id}
                                            editMode={false}
                                        />
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            </Fragment>
        );
    }
}

ListPost.propTypes = {
    categoryId: PropTypes.string
};

function mapStateToProps(state, { categoryId, match }) {
    return {
        posts: getPostsFilterSelector(state, {
            categoryId: categoryId || match.params.category
        }),
        columnsView: getColumnsView(state)
    };
}

export default withStyles(styles)(
    withRouter(connect(mapStateToProps)(ListPost))
);
