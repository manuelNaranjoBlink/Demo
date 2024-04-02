import React from "react";
import libB from "../..";

export const ViewContent = () => {

    const { CustomText, PersonalizedSpan, Button } = libB

    return (
        <div style={{ padding: "32px 0", flexDirection: "column", display: "flex", width: "500px" }}>
            <h2>View Content</h2>
            <PersonalizedSpan />
            <Button item={({ text: "Button" })} />
            <CustomText />
        </div>
    )
}