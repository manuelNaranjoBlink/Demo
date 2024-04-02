'use client'
import React, { useEffect, useState } from "react";
import useLogic from "@/useLogic/ButtonLogic/useModified";
// Al importar la lógica en el componente podemos lograr que componentes similares tengan diferentes lógicas 
// pero no se estaría importando dinámicamente, habría que seleccionar para cada componente la lógica deseada.

export default ({ item, className, onClick, disabled, startIcon, endIcon, customStyle }) => {

    const [mouseIn, setMouseIn] = useState(false);
    const { performDefaultAction } = useLogic();
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
            {item.icon ? mouseIn ? item.text : item.icon : item.text}
            {endIcon}
        </button>
    )
};