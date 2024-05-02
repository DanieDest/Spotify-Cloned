import React, { useEffect }  from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

const Playlists = () => {
  const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(()=> {
    const getPlaylistData = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: "Bearer "+token,
          "Content-Type": "application/json",
        }
      });
      const { items }  = response.data;
      const playlists = items.map(({ name, id })=> {
        return { name, id };
      });
        dispatch({type:reducerCases.SET_PLAYLISTS, playlists })
    };
    getPlaylistData();
  }, [token, dispatch]);
    return (
      <Container>
          <ul>
            {playlists.map(({ name, id }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        
      </Container>     
    )
};

const Container = styled.div`
 width: 100%;
 height: 500px;
//  background-color: red;
 text-align: start;
 color: white;
 position: relative;
 top: 100px;
`

export default Playlists