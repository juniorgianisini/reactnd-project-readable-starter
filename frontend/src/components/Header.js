import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    Toolbar,
    Select,
    MenuItem,
    AppBar,
    Typography,
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    InputBase
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import classNames from "classnames";
import { getAllCategories } from "../selectors/categories";
import {
    getColumnPostOrderBy,
    getTextSearch,
    getColumnsView,
    getTitle
} from "../selectors/view";
import AppBreadCrumbs from "./AppBreadCrumbs";
import {
    changePostsOrderBy,
    changeOpenDrawer,
    changePostsTextSearch,
    changeColumnsOrList,
    changeTitle
} from "./../actions/view";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CategoryIcon from "@material-ui/icons/Category";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import { withRouter } from "react-router-dom";
import debounce from "debounce";
import { capitalizeString } from "../utils/helper";

class Header extends Component {
    constructor(props) {
        super(props);
        this.appBar = React.createRef();
    }

    state = {
        open: false
    };

    handleDrawerOpen = () => {
        this.props.dispatch(changeOpenDrawer(true));
    };

    handleDrawerClose = () => {
        this.props.dispatch(changeOpenDrawer(false));
    };

    handleOnChangeOrderBy = event => {
        const value = event.target.value;
        this.props.dispatch(changePostsOrderBy(value));
    };

    handleOnChangeTextSearch = event => {
        const value = event.target.value;
        this.onTextSearch(value);
    };

    onTextSearch = debounce(value => {
        this.props.dispatch(changePostsTextSearch(value));
    }, 1000);

    handleOnChangeColumnsView = event => {
        const { columnsView, dispatch } = this.props;
        dispatch(changeColumnsOrList(!columnsView));
    };

    handleOnClickCategory = categ => {
        const { history, dispatch } = this.props;
        if (!categ) {
            history.push("/");
            dispatch(changeTitle("Home"));
        } else {
            history.push(`/${categ.path}`);
            dispatch(changeTitle(capitalizeString(categ.name)));
        }
        this.handleDrawerClose();
    };

    render() {
        const {
            categories,
            classes,
            columnOrderBy,
            title,
            disabledNavigation,
            disabledSearch,
            disabledOrderBy,
            disabledColumnsView,
            theme,
            columnsView
        } = this.props;
        const { openDrawer } = this.props;
        return (
            <div>
                <div className={classes.header}>
                    <AppBar
                        ref={this.appBar}
                        position="sticky"
                        className={classNames(classes.header_appbar_, {
                            [classes.header_appbar_shift]: openDrawer
                        })}
                    >
                        <Toolbar
                            disableGutters={!openDrawer}
                            className={classes.header_toolbar}
                            justify="space-between"
                        >
                            <IconButton
                                color="inherit"
                                aria-label="Open drawer"
                                onClick={this.handleDrawerOpen}
                                disabled={disabledNavigation}
                                className={classNames(
                                    classes.header_button,
                                    openDrawer && classes.header_button_hide
                                )}
                            >
                                <MenuIcon />
                            </IconButton>

                            <Typography variant="h6" color="inherit">
                                {title}
                            </Typography>

                            <div
                                className={classNames(
                                    classes.header_search,
                                    disabledSearch && classes.header_search_hide
                                )}
                            >
                                <div className={classes.header_search_icon}>
                                    <SearchIcon />
                                </div>
                                <InputBase
                                    onChange={this.handleOnChangeTextSearch}
                                    placeholder="Search..."
                                    classes={{
                                        root: classes.header_input_root,
                                        input: classes.header_input_input
                                    }}
                                />
                            </div>

                            <div className={classes.header_actions_grow} />

                            <IconButton
                                color="inherit"
                                onClick={this.handleOnChangeColumnsView}
                                className={classNames(
                                    classes.header_columnsview,
                                    disabledColumnsView &&
                                        classes.header_columnsview_hide
                                )}
                                title={
                                    !columnsView
                                        ? "Show Column View"
                                        : "Show List View"
                                }
                            >
                                {!columnsView ? (
                                    <ViewColumnIcon fontSize="large" />
                                ) : (
                                    <ViewHeadlineIcon fontSize="large" />
                                )}
                            </IconButton>

                            <Select
                                value={columnOrderBy}
                                className={classNames(
                                    classes.header_orderby,
                                    disabledOrderBy &&
                                        classes.header_orderby_hide
                                )}
                                displayEmpty
                                onChange={this.handleOnChangeOrderBy}
                            >
                                <MenuItem value="">
                                    <em>Order By</em>
                                </MenuItem>
                                <MenuItem value="voteScore">Score</MenuItem>
                                <MenuItem value="timestamp">
                                    Creation Date
                                </MenuItem>
                                <MenuItem value="title">Title</MenuItem>
                                <MenuItem value="author">Author</MenuItem>
                            </Select>
                        </Toolbar>
                    </AppBar>
                    <AppBreadCrumbs />
                    <Drawer
                        className={classes.header_drawer}
                        variant="persistent"
                        anchor="left"
                        open={openDrawer}
                        classes={{
                            paper: classes.header_drawer_paper
                        }}
                    >
                        <div className={classes.header_drawer_headers}>
                            <PersonIcon
                                color="disabled"
                                className={classes.header_drawer_icon_avatar}
                            />
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === "ltr" ? (
                                    <ChevronLeftIcon />
                                ) : (
                                    <ChevronRightIcon />
                                )}
                            </IconButton>
                        </div>

                        <Divider />

                        <List className={classes.header_drawer_list}>
                            <ListItem
                                button
                                key="all"
                                onClick={() => this.handleOnClickCategory()}
                            >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Home"
                                    primaryTypographyProps={{
                                        variant: "overline"
                                    }}
                                />
                            </ListItem>
                        </List>
                        <Divider />
                        <List
                            className={classes.header_drawer_list}
                            subheader={
                                <Typography variant="overline">
                                    Categories
                                </Typography>
                            }
                        >
                            {categories.map(categ => (
                                <ListItem
                                    button
                                    key={categ.name}
                                    onClick={() =>
                                        this.handleOnClickCategory(categ)
                                    }
                                >
                                    <ListItemIcon>
                                        <CategoryIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={categ.name}
                                        primaryTypographyProps={{
                                            variant: "overline"
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
            </div>
        );
    }
}

Comment.propTypes = {
    disabledNavigation: PropTypes.bool,
    disabledSearch: PropTypes.bool,
    disabledOrderBy: PropTypes.bool,
    disabledColumnsView: PropTypes.bool,
    title: PropTypes.string.isRequired
};

function mapStateToProps(state, { title }) {
    return {
        categories: getAllCategories(state),
        columnOrderBy: getColumnPostOrderBy(state),
        textSearch: getTextSearch(state),
        columnsView: getColumnsView(state),
        title: getTitle(state) || title,
        openDrawer: state.view.openDrawer
    };
}

export default withRouter(
    withStyles(styles, { withTheme: true })(connect(mapStateToProps)(Header))
);
