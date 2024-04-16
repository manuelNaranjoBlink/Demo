'use client'
import React, { useContext } from "react";
import Link from 'next/link';
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import InputNumber from "../InputNumber";
import PersonalizedSpan from "../PersonalizedSpan";
import Button from "../Button";

export default function ViewContent() {

    const { styles } = useContext(LibrariesContext);

    return (
        <div className={styles.viewContent.container}>
            <h2 className={styles.viewContent.title} >View Content</h2>
            <Link href="/test" className={styles.general.link}>Test Page</Link>
            <InputNumber />
            <PersonalizedSpan />
            <Button item={({ text: "Button" })} />
        </div>
    )
}