import React from "react";

interface Props {
    active: boolean,
    children: Node,
    onClick: Function
}

const Link: React.FC<Props> = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        // eslint-disable-next-line
        <a
            href=""
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
            >
                {children}
            </a>
    )
}

export default Link