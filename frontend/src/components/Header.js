import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import {
    Toolbar,
    Select,
    MenuItem,
    AppBar,
    Button,
    FormControl,
    InputLabel,
    Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { getAllCategories } from "../selectors/categories";
import { getColumnPostOrderBy } from "../selectors/view";
import PostBreadCrumbs from "./PostBreadCrumbs";
import { changePostsOrderBy } from "./../actions/posts";
import { Link } from "react-router-dom";

class Header extends PureComponent {
    handleOnChangeOrderBy = event => {
        const value = event.target.value;
        this.props.dispatch(changePostsOrderBy(value));
    };

    render() {
        const { categories, classes, columnOrderBy, title } = this.props;
        return (
            <Fragment>
                <AppBar position="sticky" color="primary" className={classes.main_bar}>
                    {title ? (
                        <Typography color="inherit" variant="h4" className={classes.main_bar_title}>
                            {title}
                        </Typography>
                    ) : (
                        <Toolbar variant="regular"  className={classes.main_bar}>
                            <Button
                                component={Link}
                                to="/"
                                variant="text"
                                color="inherit"
                            >
                                Home
                            </Button>
                            {categories.map(categ => (
                                <Button
                                    component={Link}
                                    key={categ.name}
                                    to={`/${categ.path}`}
                                    variant="text"
                                    color="inherit"
                                >
                                    {categ.name}
                                </Button>
                            ))}
                            <FormControl className={classes.select_header}>
                                <InputLabel variant="filled">
                                    <Typography
                                        className={classes.select_header}
                                    >
                                        Order By
                                    </Typography>
                                </InputLabel>
                                <Select
                                    value={columnOrderBy}
                                    className={classes.select_header}
                                    onChange={this.handleOnChangeOrderBy}
                                >
                                    <MenuItem value="">Order By</MenuItem>
                                    <MenuItem value="voteScore">Score</MenuItem>
                                    <MenuItem value="timestamp">
                                        Creation Date
                                    </MenuItem>
                                    <MenuItem value="title">Title</MenuItem>
                                    <MenuItem value="author">Author</MenuItem>
                                </Select>
                            </FormControl>
                        </Toolbar>
                    )}
                </AppBar>
                <PostBreadCrumbs />
            </Fragment>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        categories: getAllCategories(state),
        columnOrderBy: getColumnPostOrderBy(state)
    };
}

export default withStyles(styles)(connect(mapStateToProps)(Header));
