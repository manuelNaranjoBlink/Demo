import React from "react";

export default ({ item, className, onClick, disabled, startIcon }) => {

    return (
        <button disabled={disabled} className={className} onClick={onClick}>
            {/* {startIcon} */}
            {item.text}
        </button>
    )
};