import React from "react";


const Categories = ()=>{
    return(
        <div>
            <div className="flex justify-between m-20">
<div className="">
    <h1>Best<span>Deliverd </span><br/> Categories </h1>
  </div>
  <div className="">
    <p>Here Are Some Of Our Best Distributed<br/> Categories. If You Want You Can Order<br/> From Here</p>
  </div>

</div>
{/* <================================> */}

<div className="flex justify-between m-20">
  <div>
  <img src={'./burger.jpeg'} alt="sandwich" /> 
  <h1>Chicken Burger</h1>
  <span>order now </span>
  </div>
  <div>
  <img src={'./Pizza .jpeg'} alt="sandwich" /> 
  <h1>Chicken Burger</h1>
  <span>order now </span>
  </div>
  <div>
  <img src={'./chips.jpeg'} alt="sandwich" /> 
  <h1>Chicken Burger</h1>
  <span>order now </span>
  </div>
</div>


        </div>
    )
}
export default Categories;