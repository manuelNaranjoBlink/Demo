import React from "react";
import ComponentsLibrary from "@/libs";

export const ViewContent = () => {

    let actualLibrary = ComponentsLibrary.getInstance();
    const { ViewContent } = actualLibrary

    return (
        <ViewContent />
    )
}