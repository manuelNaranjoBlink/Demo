'use client'
import React from "react";

export default ({ item, className, onClick, disabled, startIcon }) => {


    // const app = "DominioA"
    // const LOGICDIR = (require(`@/app/domain/${app}/domain.config`)).LOGICDIR;
    // let useLogic = (require("@/useLogic/ButtonLogic/" + LOGICDIR)).default;
    // const { performDefaultAction } = useLogic();

    const handleClick = () => {
        console.log(onClick)
        if (onClick) {
            onClick();
        } else {
            alert("performDefaultAction")
            // performDefaultAction();
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