import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'
import Post from './Post';
import { getCategoryById } from '../selectors/categories'

class Category extends Component {
    render() {
        const { category, classes } = this.props
        if (!category || !category.posts || category.posts.length === 0) {
            return null
        } else {
            return (
                <div>
                    { category.posts.map(id => <Post id={id} mode="Detail" />) }
                </div>
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