import React, { Fragment } from "react";
import { Typography, Button } from "@material-ui/core";
import { withRouter, Link } from "react-router-dom";

const PageNotFound = props => (
    <Fragment>
        <div style={{ margin: 10 }}>
            <Typography variant="h6" color="primary">
                404 page not found
            </Typography>
            <Typography variant="body2" paragraph>
                We are sorry but the page you are looking for does not exist.
            </Typography>

            <Button variant="contained" component={Link} to="/">
                Home Page
            </Button>
        </div>
    </Fragment>
);

export default withRouter(PageNotFound);
