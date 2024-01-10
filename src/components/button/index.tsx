import React from "react"
import { buttonType } from "./button.type"
import './style.css'
const Button = ({ handleSubmit }: buttonType) => {
    return (<button id="join-btn" name="join" onClick={(e) => handleSubmit(e)}>Convert </button>)
}
export default Button