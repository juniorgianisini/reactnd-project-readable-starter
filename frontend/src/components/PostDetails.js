import React from "react";
import Post from "./Post";

export default function PostDetails(props) {
    return (
        <div>
            <Post editMode={true} />
        </div>
    );
}
