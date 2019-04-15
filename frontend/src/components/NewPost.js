import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { connect } from "react-redux";
import { getAllCategories } from "../selectors/categories";
import {
    handleAddPost,
    handleChangePost,
    createPostObject
} from "./../actions/posts";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

class NewPost extends Component {
    state = {
        title: "",
        body: "",
        author: "",
        category: "",
        open: false,
        editMode: false
    };

    onChangeField = (fieldName, event) => {
        this.setState({ [fieldName]: event.target.value });
    };

    handleOpenDialog = (category, post, editMode) => {
        if (!editMode || !post) {
            post = {
                title: "",
                body: "",
                author: "",
                category: category || ""
            };
        }
        this.setState({ open: true, editMode, ...post });
    };

    handleCancel = e => {
        if (e) e.preventDefault();
        this.setState({ open: false });
    };

    handleSave = () => {
        const { dispatch } = this.props;
        const post = createPostObject(this.state);
        if (!this.state.id) {
            dispatch(handleAddPost(post));
        } else {
            dispatch(handleChangePost(post));
        }
        this.handleCancel();
    };

    handleClose = e => {
        this.setState({ open: false });
    };

    render() {
        const { title, body, author, category, open, editMode } = this.state;
        const { classes, categories } = this.props;
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        {editMode ? "Edit Post" : "New Post"}
                    </DialogTitle>
                    <DialogContent>
                        <ValidatorForm ref="form" onSubmit={this.handleSave}>
                            <TextValidator
                                id="post_title"
                                label="Title"
                                value={title}
                                onChange={event =>
                                    this.onChangeField("title", event)
                                }
                                required
                                fullWidth
                                className={classes.post_form_item}
                                validators={["required"]}
                                errorMessages={["Title is required"]}
                            />
                            <TextValidator
                                id="post_body"
                                label="Text"
                                value={body}
                                onChange={event =>
                                    this.onChangeField("body", event)
                                }
                                required
                                fullWidth
                                className={classes.post_form_item}
                                validators={["required"]}
                                errorMessages={["Text is required"]}
                            />
                            <TextValidator
                                id="post_author"
                                label="Author"
                                value={author}
                                onChange={event =>
                                    this.onChangeField("author", event)
                                }
                                required
                                fullWidth
                                className={classes.post_form_item}
                                validators={["required"]}
                                errorMessages={["Author is required"]}
                            />

                            <FormControl
                                fullWidth
                                required
                                className={classes.post_form_item}
                            >
                                <InputLabel>Category</InputLabel>
                                <Select
                                    onChange={event =>
                                        this.onChangeField("category", event)
                                    }
                                    value={category}
                                    displayEmpty
                                    fullWidth
                                    disabled={editMode}
                                >
                                    {categories.map(category => (
                                        <MenuItem
                                            key={category.path}
                                            value={category.path}
                                        >
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <DialogActions>
                                <Button
                                    onClick={this.handleCancel}
                                    variant="contained"
                                    className={classes.post_form_item}
                                >
                                    CANCELAR
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.post_form_item}
                                    color="primary"
                                >
                                    SALVAR
                                </Button>
                            </DialogActions>
                        </ValidatorForm>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

NewPost.propTypes = {
    category: PropTypes.string
};

function mapStateToProps(state, props) {
    return { categories: getAllCategories(state) };
}

export default connect(mapStateToProps)(withStyles(styles)(NewPost));
