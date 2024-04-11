'use client'
import React, { useContext } from "react";
import Link from 'next/link';
// import libA from "../../";
import { LibrariesContext } from "@/contexts/LibrariesProvider";
import InputNumber from "../InputNumber";
import PersonalizedSpan from "../PersonalizedSpan";
import Button from "../Button";

export default () => {

    const { styles } = useContext(LibrariesContext);
    // const { InputNumber, PersonalizedSpan, Button } = libA

    return (
        <div className={styles.viewContent.container}>
            <h2 className={styles.viewContent.title} >View Content</h2>
            <Link href="/test" style={{color: 'blue'}}>Test Page</Link>
            <InputNumber />
            <PersonalizedSpan />
            <Button item={({ text: "Button" })} />
        </div>
    )
}