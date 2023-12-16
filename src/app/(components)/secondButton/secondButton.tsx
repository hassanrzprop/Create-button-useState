"use client"
import { ownerDataType } from "../../../../types/commonTypes"
export default function SecondButton(props:ownerDataType){
    return(
        <button className="button glow-button"  onClick={props.onClickHandler}>{props.Name}</button>
    )
}