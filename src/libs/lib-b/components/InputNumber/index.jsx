'use client'
import React, { useState } from "react";

export default () => {
    const [value, setValue] = useState(0);
    return (
        <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
    )
};