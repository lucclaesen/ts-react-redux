import * as React from "react";
import FilterLink, {OwnProps} from "../containers/FilterLink";
import {FilterState} from "../state";


// Notice that the filter is a so-called OwnProperty on FilterLink

const Footer = ()  => (
        <p>
            Show:
            {" "}
            <FilterLink filter={FilterState.showAll}> All </FilterLink>
            {", "}
            <FilterLink filter={FilterState.showActive}> Active </FilterLink>
            {", "}
            <FilterLink filter={FilterState.showCompleted}> Completed </FilterLink>
        </p>
)

export default Footer;