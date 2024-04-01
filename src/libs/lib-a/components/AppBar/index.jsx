import React from "react";
import Button from "../Button";

export default ({ className }) => {
    return (
        <nav className={className}>
            <ul>
                <li><Button>Home</Button></li>
                <li><Button>About Us</Button></li>
                <li><Button>Free Trial</Button></li>
                <li><Button>Contact</Button></li>
            </ul>
        </nav>
    )
};