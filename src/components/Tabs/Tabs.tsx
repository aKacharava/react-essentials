import React from "react";

export default function Tabs(
    props:{
        children: React.ReactNode,
        buttons: React.ReactNode,
    }
) {
    return(
        <>
            <menu className="mb-2 p-0 flex gap-2 list-none">
                { props.buttons }
            </menu>
            { props.children }
        </>
    )
}
