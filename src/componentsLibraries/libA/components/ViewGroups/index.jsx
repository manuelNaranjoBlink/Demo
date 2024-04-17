'use client'
import React, { useContext } from "react";
import { LibrariesContext } from "@/contexts/LibrariesProvider";

export default function ViewGroups({ groups }) {

    const { styles } = useContext(LibrariesContext);

    return (
        <div>
            Vista Grupos
        </div>
    )
}