"use client"
import React, { useContext } from "react";
import Link from 'next/link';
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import PersonalizedSpan from "../PersonalizedSpan";
import CustomText from "../CustomText";

export default function ViewContent() {

    const { styles } = useContext(LibrariesContext);

    return (
        <div className={styles.viewContent.container}>
            <h2 className={styles.viewContent.title} >View Content</h2>
            <Link href="/test" className={styles.general.link}>Test Page</Link>
            <PersonalizedSpan />
            {/* <Button item={({ text: "Button" })} /> */}
            <CustomText />
        </div>
    )
}