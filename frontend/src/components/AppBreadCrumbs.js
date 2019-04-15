import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "../styles";
import { connect } from "react-redux";
import Breadcrumbs from "@material-ui/lab/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { withRouter } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { capitalizeString } from "../utils/helper";
import { getPostById } from "../selectors/posts";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link as RouteLink } from "react-router-dom";

function AppBreadCrumbs(props) {
    const { paths, classes, location } = props;
    const pathname = location.pathname;

    return (
        <Breadcrumbs
            color="inherit"
            separator={<NavigateNextIcon fontSize="small" />}
            arial-label="Breadcrumb"
            className={classes.header_breadcrumbs}
        >
            {paths.map(path => {
                const name = capitalizeString(path.name);
                const path_ = path.path;

                if (path_ === pathname) {
                    return (
                        <Typography key={path} color="textSecondary">
                            {name}
                        </Typography>
                    );
                } else {
                    return (
                        <Link component={RouteLink} key={path} to={path_}>
                            {name}
                        </Link>
                    );
                }
            })}
        </Breadcrumbs>
    );
}

function mapStateToProps(state, { location }) {
    const pathname = location.pathname;
    const paths = [];
    if (pathname !== "/") {
        paths.push({ path: "/", name: "home" });
    }
    pathname.split("/").reduce((prev, curr, index) => {
        let path = `${prev}/${curr}`;
        let name = curr;
        if (name === "") {
            name = "home";
        }
        const post = getPostById(state, curr);
        if (post) {
            name = post.title;
        }
        paths.push({ path, name });
        return path;
    });

    return { paths };
}

export default withRouter(
    withStyles(styles)(connect(mapStateToProps)(AppBreadCrumbs))
);
