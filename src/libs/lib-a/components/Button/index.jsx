import React from "react";

export default ({ children, className, onClick, disabled, startIcon, endIcon }) => {
    return (
        <button disabled={disabled} className={className} onClick={onClick}>
            {startIcon}
            {children}
            {endIcon}
        </button>
    )
};