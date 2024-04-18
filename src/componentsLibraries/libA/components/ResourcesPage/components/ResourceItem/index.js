import React from "react";

export default function ViewResources({ Resources }) {

    return (
        <ul className='resources-container'>
            {Object.values(Resources).map((book, index) => {
                return (
                    <li className='book' key={index}>
                        <div className='thumbContainer'>
                            <div className='thumb' style={{ backgroundImage: `url(http://192.168.1.52/${book.thumb})` }} >
                                <img src={'http://192.168.1.52/' + book.thumb} />
                            </div>
                        </div>
                        <h3 className='book-title' >{book.name}</h3>
                        <p className='book-author' >{book.author.contributor}</p>
                    </li>
                )
            })}
        </ul>
    )
}