import React from "react";
import ListPosts from "./ListPosts";

export default function Category(props) {
    const { id } = props.match.params;
    return <ListPosts category={id} />;
}
