import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import Category from './Category'
import { getCategoryIds } from '../selectors/categories'

class ListCategory extends Component {
    render() {
        const { categIds } = this.props
        return (
            <div className="categories">
                {categIds.map(id => <Category key={id} id={id} />)}
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    return { categIds: getCategoryIds(state) }
}

export default connect(mapStateToProps)(ListCategory)