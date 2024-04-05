import React, { useContext } from "react";
import libA from "../../";
import { LibrariesContext } from "@/contexts/LibrariesProvider";

export default () => {

    const { styles } = useContext(LibrariesContext);
    const { InputNumber, PersonalizedSpan, Button } = libA

    return (
        <div className={styles.viewContent.container}>
            <h2 className={styles.viewContent.title} >View Content</h2>
            <InputNumber />
            <PersonalizedSpan />
            <Button item={({ text: "Button" })} />
        </div>
    )
}