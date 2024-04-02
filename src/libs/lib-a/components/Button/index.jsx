'use client'
import React from "react";
import useLogic from "@/useLogic/ButtonLogic/useDefault";
// Al importar la lógica en el componente podemos lograr que componentes similares tengan diferentes lógicas 
// pero no se estaría importando dinámicamente, habría que seleccionar para cada componente la lógica deseada.

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