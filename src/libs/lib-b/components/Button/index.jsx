'use client'
import React, { useEffect, useState } from "react";

export default ({ item, className, onClick, disabled, startIcon, endIcon, customStyle }) => {

    const [mouseIn, setMouseIn] = useState(false);

    return (
        <button disabled={disabled} className={className} onClick={() => { alert("Func previa a onClick"); onClick() }} style={customStyle} onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}>
            {startIcon}
            {/* {item.text}
            {item.icon} */}
            {mouseIn ? item.text : item.icon}
            {endIcon}
        </button>
    )
};