import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "../Css/Spotify.css"
import Body from "./Body";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";




const Spotify = () => {
  const [{ token }, dispatch] = useStateProvider();
  
  useEffect(() => {
    const getUserInfo = async ()=> {
      const { data } = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
          Authorization: "Bearer "+token,
          "Content-Type": "application/json",
        },
      });
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
      };
      dispatch({ type: reducerCases.SET_USER, userInfo })
    };
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
            </div>
            
         </div>
    )
};




export default Spotify