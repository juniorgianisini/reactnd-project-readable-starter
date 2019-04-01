import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: "left",
        color: theme.palette.text.secondary,
        margimTop: 10,
        marginBottom: 10
    }
});

class Category extends Component {
    render() {
        const { category, classes } = this.props
        return (
            <Grid item xs={11}>
                <Typography variant="h4">
                    {category}
                </Typography>
                <Paper className={classes.paper}>Post 1</Paper>
                <Paper className={classes.paper}>Post 2</Paper>
                <Paper className={classes.paper}>Post 3</Paper>
            </Grid>
        );
    }
}


Category.propTypes = {
    category: PropTypes.string.isRequired
};

export default withStyles(styles)(Category);