"use client"
import { useState } from "react";

import Button from "../Button/button";
import { log } from "console";
import { ownerDataType } from "../../../../types/commonTypes";
export default function CounterSection(){
    // var CountingNumber=0
    const [countState, SetCountState]=useState(0);
    const onClickNegativeEventHandler=()=>{
      SetCountState(countState-1)
      // CountingNumber-1;
      // console.log(CountingNumber)
   }
  const OnclickPlusEventHandler= ()=> {
        SetCountState(countState+1)
        // CountingNumber+1;
        
        // console.log(CountingNumber)
  } 
 {countState}
  const onclickResetHandler= ()=>{
    SetCountState(0)
  }
  console.log("rendering")
  // Defining the array of Owners
  var Owners=[{
    Name:"Ali",
    index:1,
    Post:"CEO"
  },
{
  Name:"Waqar",
  index:2,
  Post:"Incharge"
},
{
  Name:"huzi",
  index:3,
  Post:"Sweaper"
}]
const OnclickArrayPrevious=()=>{
  
}
    return(
        <div>
          
             {/* <Button title="+"/ > */}
             <br/>
             <Button title="-" onClickHandler={onClickNegativeEventHandler}/>
        
            <span> {countState}</span>
            <Button title="+" onClickHandler={OnclickPlusEventHandler}/>
            <br/>
            <Button title="Reset" onClickHandler={onclickResetHandler}/>
            <br/>
            <section className="owners">
              {/* <Button title="previous" onClickHandler={} */}
            </section>
        </div>
             
    )
}
const [NameState,setNameSet]=useState([{
  Name:"Ali",
  index:1,
  Post:"CEO"
},
{
Name:"Waqar",
index:2,
Post:"Incharge"
},
{
Name:"huzi",
index:3,
Post:"Sweaper"
}])

