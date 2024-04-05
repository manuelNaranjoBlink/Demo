// import React from "react";
// import libB from "../..";
// import SelectByDom from "@/utils/selectByDom";

// export const ViewContent = async() => {

//     const app = "DominioA"
//     const THEMEDIR = (await import(`@/app/domain/${app}/domain.config`)).THEMEDIR;
//     let styles = (await import("@/themes/" + THEMEDIR)).default;

//     // let styles = SelectByDom.getTheme();
//     const { CustomText, PersonalizedSpan, Button } = libB

//     return (
//         <div className={styles.viewContent.container}>
//             <h2 className={styles.viewContent.title} >View Content</h2>
//             <PersonalizedSpan />
//             <Button item={({ text: "Button" })} />
//             <CustomText />
//         </div>
//     )
// }