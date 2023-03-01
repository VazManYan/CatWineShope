import React, { useState } from "react";
import "./Home.css";
import Slide from "./Slide";
function Home(){
    const[index,setIndex] = useState(0);
    return(
        <div className="Home">
            
          <div className="tabList">
                <div className="tabHeadWine" onClick={()=>{setIndex(1)}}>
                    <p>WINE</p>
                </div>
                <div className="tabHeadCheese" onClick={()=>{setIndex(2)}}>
                    <p>CHEESE</p>
                </div>
                <div className="tabHeadFish" onClick={()=>{setIndex(3)}}>
                    <p>FISH</p>
                </div>
                <div className="tabHeadSalad" onClick={()=>{setIndex(4)}}>
                    <p>SALAD</p>
                </div>
          </div>
          <div className="SlideDiv" hidden = {index !==0}>
            <Slide/>
          </div>
          <div className="tabHeadWineInfo" hidden = {index !== 1}>
                <h1>WINE INFO</h1>
          </div>
          <div className="tabHeadCheeseInfo" hidden = {index !== 2}>
                <h1>CHEESE INFO</h1>
          </div>
          <div className="tabHeadSaladInfo" hidden = {index !== 3}>
                <h1>FISH INFO</h1>
          </div><div className="tabHeadFishInfo" hidden = {index !== 4}>
                <h1>SALAD INFO</h1>
          </div>
          

        </div>

    )
}
export default Home;