import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Toolbar, Typography, Grid, Select, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import { getCategoryIds } from '../selectors/categories';

class MainBar extends Component {
    render() {
        const { categIds, classes } = this.props
        return (
            <Grid container className={classes.category_root}>
                <Grid item xs={12}>
                    <Grid container className={classes.category_grid} justify="center">
                        <Grid item xs={8}>
                            <Toolbar variant="dense" className={classes.main_bar}>
                                <Typography variant="overline" noWrap key={0}>
                                    Todas
                                </Typography>
                                {categIds.map(id => (
                                    <Typography variant="overline" noWrap key={id}>
                                        {id}
                                    </Typography>
                                ))}
                            </Toolbar>
                        </Grid>
                        <Grid item xs={8}>
                            <Select
                                value={""}
                                displayEmpty
                                name="age"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value="">
                                    <em>Selecione o método de ordenação</em>
                                </MenuItem>
                                <MenuItem value={1}>Ordenar por pontuação</MenuItem>
                                <MenuItem value={2}>Ordenar por data de criação</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
        );
    }
}

function mapStateToProps(state, props) {
    return { categIds: getCategoryIds(state) }
}

export default withStyles(styles)(connect(mapStateToProps)(MainBar))