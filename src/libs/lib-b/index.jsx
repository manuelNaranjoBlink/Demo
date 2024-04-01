import React from "react";
import libA from "../lib-a/index.jsx";
import InputNumber from "./components/InputNumber/index.jsx";
import Button from "./components/Button/index.jsx";

export default {
    ...libA,
    Button: Button,
    InputNumber: InputNumber
}