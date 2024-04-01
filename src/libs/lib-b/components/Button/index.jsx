import React from "react";

export default ({ className, onClick, disabled }) => {

    return (
        <button disabled={disabled} className={className} onClick={onClick}>
            Default Text from B
        </button>
    )
};