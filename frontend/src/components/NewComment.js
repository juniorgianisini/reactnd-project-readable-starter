import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { connect } from "react-redux";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import {
    handleAddComment,
    handleChangeComment,
    createCommentObject
} from "../actions/comments";

class NewComment extends Component {
    state = {
        body: "",
        author: "",
        open: false,
        editMode: false
    };

    onChangeField = (fieldName, event) => {
        this.setState({ [fieldName]: event.target.value });
    };

    handleOpenDialog = (comment, editMode) => {
        if (!editMode) {
            comment = {
                body: "",
                author: ""
            };
        }
        this.setState({ open: true, editMode, ...comment });
    };

    handleCancel = e => {
        if (e) e.preventDefault();
        this.setState({ open: false });
    };

    handleSave = () => {
        const { dispatch, postId } = this.props;
        const comment = createCommentObject(this.state, postId);
        if (!this.state.id) {
            dispatch(handleAddComment(comment));
        } else {
            dispatch(handleChangeComment(comment));
        }
        this.handleCancel();
    };

    handleClose = e => {
        this.setState({ open: false });
    };

    render() {
        const { body, author, open, editMode } = this.state;
        const { classes } = this.props;
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">
                        {editMode ? "Edit Comment" : "New Comment"}
                    </DialogTitle>
                    <DialogContent>
                        <ValidatorForm ref="form" onSubmit={this.handleSave}>
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

NewComment.propTypes = {
    postId: PropTypes.string.isRequired
};

export default connect()(withStyles(styles)(NewComment));
