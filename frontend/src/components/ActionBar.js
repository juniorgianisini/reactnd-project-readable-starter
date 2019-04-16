import React, { Fragment } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { Toolbar, Typography } from "@material-ui/core";

const ActionBar = (props) => {
    const {
        classes,
        voteScore,
        editMode,
        onUpVote,
        onDownVote,
        onEdit,
        onRemove
    } = props;
    return (
        <Toolbar
            variant="dense"
            className={classes.action_bar}
            disableGutters={true}>
            <IconButton
                aria-label="Up Vote Score"
                className={classes.margin}
                title="Up Vote"
                onClick={onUpVote}>
                <ThumbUpIcon fontSize="small" />
            </IconButton>
            <Typography
                variant="subtitle2"
                color="textSecondary"
                title="Vote Score">
                {voteScore}
            </Typography>
            <IconButton
                aria-label="Down Vote Score"
                className={classes.margin}
                title="Down Vote"
                onClick={onDownVote}>
                <ThumbDownIcon fontSize="small" />
            </IconButton>
            {editMode && (
                <Fragment>
                    <IconButton
                        aria-label="Edit"
                        title="Edit"
                        className={classes.margin}
                        onClick={onEdit}>
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        aria-label="Delete"
                        title="Remove"
                        className={classes.margin}
                        onClick={onRemove}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </Fragment>
            )}
            {props.children}
        </Toolbar>
    );
}

ActionBar.propTypes = {
    editMode: PropTypes.bool.isRequired,
    voteScore: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    onUpVote: PropTypes.func.isRequired,
    onDownVote: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default withStyles(styles)(ActionBar);
