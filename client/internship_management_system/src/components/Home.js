import React from "react";
import "./Home.css"



function Home (){

    return (
        <div id="home">
            {/* <div className="header">
                <h1>Header</h1>
            </div> */}


        <div class="row">
          {/* <div class="column side">
          </div> */}
          
          <div class="column middle">
              <div class="hero-image">
                <div class="hero-text">
                  <h1 style={{fontSize:"50px"}}>Nurturing Information Technology talent beyond boundaries</h1>
                  <h4>Use the Navigation bar above to explore Site</h4>
                </div>
              </div>
          </div>
          

        </div>

<div class="footer">
  <p>All Rights Reserved</p>
</div>

        </div>
    )
}

export default Home;