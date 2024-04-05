import React from "react";
import libA from "../../";

export default ViewContent = async () => {

    // const app = "DominioA"
    // const THEMEDIR = (await import(`@/app/domain/${app}/domain.config`)).THEMEDIR;
    // let styles = (await import("@/themes/" + THEMEDIR)).default;
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