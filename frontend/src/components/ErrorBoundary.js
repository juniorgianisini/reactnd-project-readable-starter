import React, { Component } from "react";
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                    <div style={{ margin: 10 }}>
                        <Typography variant="h6" color="secondary">
                            Something went wrong.
                        </Typography>

                        <Button variant="contained" component={Link} to="/">
                            Home Page
                        </Button>
                        
                        <details style={{ whiteSpace: "pre-wrap" }}>
                            {this.state.error && this.state.error.toString()}
                            <br />
                            {this.state.errorInfo.componentStack}
                        </details>
                    </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
