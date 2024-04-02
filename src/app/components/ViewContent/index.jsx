import React from "react";
import ComponentsLibrary from "@/libs/index";
import { Param } from "@/utils";

export const ViewContent = () => {

    let actualLibrary = ComponentsLibrary.getInstance();

    return (
        <div style={{ padding: "32px 0", flexDirection: "column", display: "flex", width: "500px" }}>
            <h2>View Content</h2>
            {Param == "DominioA" && <actualLibrary.InputNumber />}
            <actualLibrary.PersonalizedSpan />
            <actualLibrary.Button item={({ text: "Button" })} />
            {Param == "DominioB" && <actualLibrary.CustomText />}
        </div>
    )
}