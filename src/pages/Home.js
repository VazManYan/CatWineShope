import React, { useState } from "react";
import "./Home.css";
function Home(){
    const[index,setIndex] = useState(0);
    return(
        <div className="Home">
            
          <div className="tabList">
                <div className="tabHeadWine" onClick={()=>{setIndex(0)}}>
                    <p>WINE</p>
                </div>
                <div className="tabHeadCheese" onClick={()=>{setIndex(1)}}>
                    <p>CHEESE</p>
                </div>
                <div className="tabHeadFish" onClick={()=>{setIndex(2)}}>
                    <p>FISH</p>
                </div>
                <div className="tabHeadSalad" onClick={()=>{setIndex(3)}}>
                    <p>SALAD</p>
                </div>
          </div>
          <div className="tabHeadWineInfo" hidden = {index !== 0}>
                <h1>WINE INFO</h1>
          </div>
          <div className="tabHeadCheeseInfo" hidden = {index !== 1}>
                <h1>CHEESE INFO</h1>
          </div>
          <div className="tabHeadSaladInfo" hidden = {index !== 2}>
                <h1>FISH INFO</h1>
          </div><div className="tabHeadFishInfo" hidden = {index !== 3}>
                <h1>SALAD INFO</h1>
          </div>
          

        </div>

    )
}
export default Home;