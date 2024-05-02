import React from "react";
import "../Css/Body.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Body = () => {
    return (
      <div className="Container-body">
         <Navbar />

         <div className="Body-container">
            <section className="made-for-songs">
               <h1>Made For Songs</h1>
               <small>Show all</small>
            </section>

            <section className="section-made-songs">

            <div class="card">
                <div class="card2">
  
                </div>
            </div>

            </section>










         </div>
          

         {/* <div className="spotfy__footer">
            <Footer />
         </div> */}
      </div>
    )
};



export default Body