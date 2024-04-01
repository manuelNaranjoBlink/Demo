'use client'
import React from "react";
import useLogic from "../../../../useLogic/ButtonLogic/useDefault";

export default ({ item, className, onClick, disabled, startIcon }) => {
    const { performDefaultAction } = useLogic();

	const handleClick = () => {
        console.log(onClick)
		if (onClick) {
			onClick();
		} else {
			performDefaultAction();
		}
	};

    return (
        <button
            className={className}
            disabled={disabled}
            onClick={handleClick}
        >
            {/* {startIcon} */}
            {item.text}
        </button>
    )
};