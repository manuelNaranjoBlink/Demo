import React from "react";
import libA from "../..";

export const ViewContent = () => {

    const { InputNumber, PersonalizedSpan, Button } = libA

    return (
        <div style={{ padding: "32px 0", flexDirection: "column", display: "flex", width: "500px" }}>
            <h2>View Content</h2>
            <InputNumber />
            <PersonalizedSpan />
            <Button item={({ text: "Button" })} />
        </div>
    )
}