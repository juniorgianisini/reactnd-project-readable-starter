import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Toolbar, Typography, Grid, Select, MenuItem, AppBar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import { getCategoryIds } from '../selectors/categories';

class MainBar extends Component {
    render() {
        const { categIds, classes } = this.props
        return (
            <AppBar position="static">
                <Toolbar variant="dense" className={classes.main_bar}>
                    <Button variant="flat" color="inherit">All</Button>
                    {categIds.map(id => (
                        <Button variant="flat" color="inherit">{id}</Button>
                    ))}
                    <Select
                        value={""}
                        displayEmpty
                        name="age"
                        color="inherit"
                        className={classes.selectEmpty}
                    >
                        <MenuItem value="" color="inherit">
                            <em>Order By</em>
                        </MenuItem>
                        <MenuItem color="inherit" value={1}>Score</MenuItem>
                        <MenuItem color="inherit" value={2}>Creation Date</MenuItem>
                    </Select>
                </Toolbar>
            </AppBar>
        );
    }
}

function mapStateToProps(state, props) {
    return { categIds: getCategoryIds(state) }
}

export default withStyles(styles)(connect(mapStateToProps)(MainBar))