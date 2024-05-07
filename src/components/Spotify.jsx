import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../Css/Spotify.css"
import Body from "./Body";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";
import Footer from "../components/Footer";




const Spotify = () => {
  const [{ token }, dispatch] = useStateProvider();
  
  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });
        const userInfo = {
          userId: data.id,
          userName: data.display_name,
        };
        dispatch({ type: reducerCases.SET_USER, userInfo });
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };
  
    getUserInfo(); // Call getUserInfo function
  }, [dispatch, token]);
  
 
    return (
         <div className="Container">
            <div className="spotify__body">
               <Sidebar />
                  <div className="body">
                      <div className="body__contents">
                        <Body />
                      </div>
                  </div>
                  <Footer>
                  <Footer />
                  </Footer>
            </div>
            
         </div>
    )
};




export default Spotify