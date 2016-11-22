import * as React from "react";

// interface A { a: string }
// interface B { b: string }
// interface C { c: string }

// var abc: A & B & C;

// interface LinkProps {
//     active: boolean,
//     children: React.ReactElement<any>,
//     onClick: () => void
// }

export interface LinkDispatcherProps {
    onClick: () => void
}

export interface LinkStateProps {
    active: boolean
}

interface IHaveChildren {
    children: React.ReactNode
}

// const Link = ({active, children, onClick} : {active: boolean, children: any, onClick: any}) => {
const Link = (props: LinkDispatcherProps & LinkStateProps & IHaveChildren) => {
    if (props.active) {
        return <span>{props.children}</span>;
    }

    return (
        <a  href="#"
            onClick = {e => {
                e.preventDefault();
                props.onClick();
            }}
        >
            {props.children}
        </a>
    );
}

export default Link;