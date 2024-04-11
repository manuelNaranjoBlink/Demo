import React from "react";

export default ({ className, text }) => {

    return (
        <span className={className} >
            {text || "TEXT desde libreria B"}
        </span>
    )
}