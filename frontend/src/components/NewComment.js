import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Dialog, Toolbar, AppBar, DialogTitle, DialogActions, DialogContent } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import styles from '../styles'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class NewComment extends Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: '',
        open: false
    }

    onChangeField = (fieldName, event) => {
        this.setState({ [fieldName]: event.target.value })
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleCancel = (e) => {
        e.preventDefault()
        this.setState({ open: false });
    }

    handleSave = (e) => {
        e.preventDefault()
    }

    handleClose = (e) => {
        this.setState({ open: false });
    }

    render() {
        const { body, author, open } = this.state
        const { classes } = this.props
        return (
            <div>
                <Fab color="secondary" aria-label="Add" size="medium" className={classes.fab_header} onClick={(e) => this.handleClickOpen(e)}>
                    <AddIcon fontSize='default' />
                </Fab>
                <Dialog
                    open={open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">New Comment</DialogTitle>
                    <DialogContent>
                        <form noValidate autoComplete="off">
                            <TextField id="post_body" label="Text" value={body}
                                onChange={event => this.onChangeField('body', event)}
                                required
                                fullWidth
                                className={classes.post_form_item}
                            />
                            <TextField id="post_author" label="Author" value={author}
                                onChange={event => this.onChangeField('author', event)}
                                required
                                fullWidth
                                className={classes.post_form_item}
                            />
                        </form>
                        <DialogActions>
                            <Button
                                onClick={this.handleCancel}
                                variant="contained"
                                className={classes.post_form_item}>
                                CANCELAR
                            </Button>
                            <Button
                                onClick={this.handleSave}
                                type="submit"
                                variant="contained"
                                className={classes.post_form_item}
                                color="primary">
                                SALVAR
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

NewComment.propTypes = {
    postId: PropTypes.string.isRequired
};

export default withStyles(styles)(connect()(NewComment));