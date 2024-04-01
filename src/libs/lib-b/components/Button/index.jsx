'use client'
import React, { useEffect, useState } from "react";

import useModified from "../../../../useLogic/ButtonLogic/useModified";

export default ({ item, className, onClick, disabled, startIcon, endIcon, customStyle }) => {

    const [mouseIn, setMouseIn] = useState(false);
    
	const { performDefaultAction } = useModified();
    const handleClick = () => {
		if (onClick) {
			onClick();
		} else {
			performDefaultAction();
		}
	};

    return (
        <button
            disabled={disabled}
            className={className}
            onClick={handleClick}
            style={customStyle}
            onMouseEnter={() => setMouseIn(true)} onMouseLeave={() => setMouseIn(false)}>
            {startIcon}
            {/* {item.text}
            {item.icon} */}
            {mouseIn ? item.text : item.icon}
            {endIcon}
        </button>
    )
};