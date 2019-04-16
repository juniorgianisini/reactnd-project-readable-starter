import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { handleReceiveInitialData } from "../actions/shared";
import Category from "./Category";
import { MuiThemeProvider, withStyles } from "@material-ui/core";
import PostDetails from "./PostDetails";
import ListPosts from "./ListPosts";
import PageNotFound from "./PageNotFound";
import theme from "../theme";
import classNames from "classnames";
import styles from "../styles";
import AppRoute from "./AppRoute";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveInitialData());
    }

    render() {
        const { loading, openDrawer, classes } = this.props;
        return (
            <MuiThemeProvider theme={theme}>
                <Router>
                    <Fragment>
                        <LoadingBar />
                        {!loading && (
                            <main
                                className={classNames(classes.app_content, {
                                    [classes.app_content_shift]: openDrawer
                                })}>
                                <Switch>
                                    <Route
                                        exact
                                        path="/notfound"
                                        component={PageNotFound}
                                    />
                                    <AppRoute
                                        exact
                                        path="/"
                                        title="Home"
                                        onlyTitle={false}
                                        page={<ListPosts {...this.props} />}
                                    />
                                    
                                    <AppRoute
                                        exact
                                        path="/:category/:post_id"
                                        title="Post Details"
                                        onlyTitle={true}
                                        page={<PostDetails />}
                                    />

                                    <AppRoute
                                        exact
                                        path="/:category"
                                        title="Category Post List"
                                        onlyTitle={false}
                                        page={<Category {...this.props} />}
                                    />
                                    <Route
                                        path="*"
                                        component={PageNotFound}
                                    />
                                </Switch>
                            </main>
                        )}
                    </Fragment>
                </Router>
            </MuiThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        loading: state.categories.length === 0,
        openDrawer: state.view.openDrawer
    };
}

export default withStyles(styles)(connect(mapStateToProps)(App));
