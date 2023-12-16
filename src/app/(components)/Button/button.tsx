"use client"
import { handler } from "../../../../types/commonTypes"

export default function Button(props:handler){
    return(
        <>
        <button className="buttonStyle glow-button" onClick={props.onClickHandler}>{props.title}</button>
        </>
    )
}