import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import { Route } from "react-router-dom";

class AppRoute extends Component {
    render() {
        const { onlyTitle, title, page } = this.props;
        return (
            <Route
                {...this.props}
                render={props => (
                    <Fragment>
                        {onlyTitle ? (
                            <Header
                                title={title}
                                disabledNavigation={false}
                                disabledSearch={true}
                                disabledOrderBy={true}
                                disabledColumnsView={true}
                            />
                        ) : (
                            <Header title={title} />
                        )}
                        {page}
                    </Fragment>
                )}
            />
        );
    }
}

AppRoute.propTypes = {
    onlyTitle: PropTypes.bool,
    title: PropTypes.string.isRequired
};

export default AppRoute;
