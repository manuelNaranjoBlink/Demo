import React from "react";

export default ({ item, className, onClick, disabled }) => {

    return (
        <button disabled={disabled} className={className} onClick={onClick}>
            {item.text}
        </button>
    )
};