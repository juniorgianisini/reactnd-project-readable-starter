import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Post from './Post';
import { getCategoryById } from '../selectors/categories'

class Category extends Component {
    render() {
        const { category, classes } = this.props
        if (!category || !category.posts || category.posts.length == 0) {
            return null
        } else {
            return (
                <Grid className={classes.category_grid}>
                    <Grid item xs={6}>
                        <Typography variant="overline" color="textSecondary" >
                            {category.name}
                        </Typography>
                        {category.posts.map(id => <Post id={id} />)}
                    </Grid>
                </Grid>
            );
        }
    }
}


Category.propTypes = {
    id: PropTypes.string.isRequired
};

function mapStateToProps(state, props) {
    const id = props.id || props.match.params.id
    let category = getCategoryById(state, id)
    return { category: category }
}

export default withStyles(styles)(connect(mapStateToProps)(Category));