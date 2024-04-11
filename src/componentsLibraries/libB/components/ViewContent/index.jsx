"use client"
import React, { useContext } from "react";
import Link from 'next/link';
// import componentsLibrary from "../..";
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import CustomText from "../CustomText";
import PersonalizedSpan from "../PersonalizedSpan";

export default () => {

    const { styles } = useContext(LibrariesContext);
    // const { CustomText, PersonalizedSpan } = componentsLibrary

    return (
        <div className={styles.viewContent.container}>
            <h2 className={styles.viewContent.title} >View Content</h2>
            <Link href="/test" style={{color: 'blue'}}>Test Page</Link>
            <PersonalizedSpan />
            {/* <Button item={({ text: "Button" })} /> */}
            <CustomText />
        </div>
    )
}