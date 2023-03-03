import React, { useState } from "react";
import Cheeses from "./Cheeses";
import Fishes from "./Fishes";
import "./Home.css";
import Salads from "./Salads";
import Slide from "./Slide";
import Wines from "./Wines";
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
                <Wines/>
          </div>
          <div className="tabHeadCheeseInfo" hidden = {index !== 2}>
                <Cheeses/>
          </div>
          <div className="tabHeadSaladInfo" hidden = {index !== 3}>
                <Fishes/>
          </div><div className="tabHeadFishInfo" hidden = {index !== 4}>
                <Salads/>
          </div>
          

        </div>

    )
}
export default Home;