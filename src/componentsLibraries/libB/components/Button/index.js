import React from "react";
import { useRouter } from 'next/navigation'

export default function Button({ item, className, onClick, disabled, startIcon, endIcon, customStyle }) {

    const router = useRouter()

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (item.href) {
            router.push(item.href)
        } else {
            alert('Vendría la lógica independiente de este componente')
        }
    };

    return (
        <button disabled={disabled} className={className} onClick={handleClick} style={customStyle}>
            {startIcon}
            {item.icon ? mouseIn ? item.text : item.icon : item.text}
            {endIcon}
        </button>
    )
};