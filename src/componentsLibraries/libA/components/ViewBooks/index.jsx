'use client'
import React, { useContext } from "react";
import { LibrariesContext } from "@/contexts/LibrariesProvider";

export default function ViewBooks({ books }) {

    const { styles } = useContext(LibrariesContext);

    return (
        <div className={styles.viewContent.container}>
            <h2 className={styles.viewContent.title} >View Books</h2>
            <ul className={styles.viewContent.booksContainer}>
                {Object.values(books).map((book, index) => {
                    return (
                        <li className={styles.viewContent.book} key={index}>
                            <div className={styles.viewContent.thumbContainer}>
                                <div className={styles.viewContent.thumb} style={{ backgroundImage: `url(http://192.168.1.52/${book.thumb})` }} >
                                    <img style={{ width: '100%' }} src={'http://192.168.1.52/' + book.thumb} />
                                </div>
                            </div>
                            <h3 className={styles.viewContent.bookTitle} >{book.name}</h3>
                            <p className={styles.viewContent.bookAuthor} >{book.author.contributor}</p>
                        </li>
                    )
                })}
            </ul>
        </div >
    )
}