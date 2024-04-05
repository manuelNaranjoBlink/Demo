import React, { useContext } from "react";
import componentsLibrary from "../..";
import { LibrariesContext } from "@/contexts/LibrariesProvider";

export const ViewContent = async() => {

    const { styles } = useContext(LibrariesContext);
    const { CustomText, PersonalizedSpan, Button } = componentsLibrary

    return (
        <div className={styles.viewContent.container}>
            <h2 className={styles.viewContent.title} >View Content</h2>
            <PersonalizedSpan />
            <Button item={({ text: "Button" })} />
            <CustomText />
        </div>
    )
}