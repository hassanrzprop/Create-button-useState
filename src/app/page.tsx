"use client"
import Image from "next/image"
import Header from "./(components)/header"
import Footer from "./(components)/footer"
import Link from "next/link"
import { ItemQuantity } from "../../types/commonTypes"
import { useState } from "react"
import Button from "./(components)/Button/button"
import CounterSection from "./(components)/counterSection/counterSection"


export default function Home(){
  const [countState, SetCountState]=useState(0);
  const OnclickPlusEventHandler= ()=> {
        SetCountState(countState+1)
        console.log(countState)
  } 
  const OnclickNegativeEventHandler = ()=>{
    SetCountState(countState-1)
    console.log(countState)
  }

  return(
    <div>
       <Header/>
    <section className="hero">
      <h1>Welcome to My Store</h1>
      <p>Find the best deals on our products!</p>
      <a href="/shop" className="btn">Shop Now</a>
    </section>

    <section className="products">
      <h2>Featured Products</h2>
      <div className="product">
        <Image src="/img/product1.jpeg" alt="Product 1" width={50   } height={50}/>
        <h3>Product 1</h3>
        <p>$2.99</p>
        <a href="#" className="btn">Add to Cart</a>
        <br/>
        <CounterSection/>
        

        
      </div>
      {/* <!-- More product items go here --> */}
    </section>
    
  
   <Footer/>

    </div>
  )
}