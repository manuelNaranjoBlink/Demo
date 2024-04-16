import React from "react";

export default function CustomText({ className, text }) {

    return (
        <span className={className} >
            {text || "TEXT desde libreria B"}
        </span>
    )
}