import React from "react";
import ComponentsLibrary, { param } from "@/libs/index";

export const ViewContent = () => {

    return (
        <div style={{ padding: "32px 0", flexDirection: "column", display: "flex", width: "500px" }}>
            <h2>View Content</h2>
            {param == "libA" && <ComponentsLibrary.InputNumber />}
            <ComponentsLibrary.PersonalizedSpan />
            {param == "libB" && <ComponentsLibrary.CustomText />}
        </div>
    )
}