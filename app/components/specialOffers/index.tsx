import React from "react";
import {  FaFootballBall, FaReact, FaUtensilSpoon, } from 'react-icons/fa';


const SpecialOffers = ()=>{
    return(
        <div>
                  <div className="flex justify-between px-60 mx-20">
  <div className="text-3xl mt-20">
    <h1>All Fast Food is <br />Available at Foodle</h1>
    <p>We Are Just A Click Away When You <br />Crave For Delicious Fast Food</p>
    <button className="">Buy Now</button>
    <button className="">How To Order</button>
  </div>
  <div className="">
    <img src={'./sandwich.png'} alt="sandwich" /> 
  </div>
</div>

{/* <================================================================> */}


<div className="flex justify-between m-20">
  <div className="">
  <FaUtensilSpoon />
    <h1>Fast Delivery</h1>
    <p>The Food Will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
  </div>
  <div className="">
    <h1>Fresh Food</h1>
    <p>Your Food Will Be Delivered <br />100% Fresh To Your Home. We<br />Do Not Deliver Stale Food</p>
  </div>
  <div className="">
    <h1>Free Delivery</h1>
    <p>Your Food Delivery Is<br /> Absolutely Free. No Cost<br /> Just Order And Enjoy</p>
  </div>
</div>
        </div>
    )
}

export default SpecialOffers;