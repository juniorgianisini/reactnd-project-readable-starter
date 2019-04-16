import React, { Component } from "react";
import { connect } from "react-redux";
import ListPosts from "./ListPosts";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { getCategoryById, getAllCategories } from "../selectors/categories";
import { changeTitle } from "../actions/view";
import { capitalizeString } from "../utils/helper";

class Category extends Component {
    componentDidMount() {
        const { dispatch, category } = this.props;
        if (category) dispatch(changeTitle(capitalizeString(category.name)));
    }

    render() {
        const { categoryId, category, categories } = this.props;

        if (categoryId && !category) {
            return <Redirect to="/notfound" />;
        }

        return <ListPosts categoryId={categoryId} />;
    }
}

function mapStateToProps(state, { categoryId, match }) {
    let categoryId_ = categoryId || match.params.category;
    return {
        categoryId: categoryId_,
        category: getCategoryById(state, categoryId_)
    };
}

export default withRouter(connect(mapStateToProps)(Category));
