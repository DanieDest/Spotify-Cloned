import React, { useEffect } from "react";
import "../Css/CurrentTrack.css";
import { useStateProvider } from "../utils/StateProvider";
import { reducerCases } from "../utils/Constants";
import axios from "axios";

const CurrentTrack = () => {
    const [{ token, currentlyPlaying }, dispatch] = useStateProvider();
    useEffect(()=> {
      const getCurrentTrack = async () => {
        try {
          const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: {
              Authorization: "Bearer "+token,
              "Content-Type": "application/json",
            }
            
          });
          if (response.data !== "") {
            const { item } = response.data;
            const newCurrentlyPlaying = {
              id: item.id,
              name: item.name,
              artists: item.artists.map((artist) => artist.name),
              image: item.album.images[2].url,
            };
            console.log(response)
            dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: newCurrentlyPlaying });
          }
        } catch (error) {
          console.error("Error fetching currently playing track:", error);
        }
      };
      getCurrentTrack();
    }, [token, dispatch]);
    
    return (
      <>
         {currentlyPlaying && (
          <div className="track">
            <div className="track___image">
              <img src={currentlyPlaying.image} alt="U ME LOVE" />
            </div>
            <div className="track__info">
              <h4>{currentlyPlaying.name}</h4>
              <h6>{currentlyPlaying.artists.join(", ")}</h6>
            </div>
          </div> 
        )}
      </>
    );
};

export default CurrentTrack;
