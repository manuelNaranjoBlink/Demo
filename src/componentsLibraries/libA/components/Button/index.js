import { useRouter } from 'next/navigation';
import React from "react";

export default function Button({ item, className, onClick, disabled, startIcon }) {

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