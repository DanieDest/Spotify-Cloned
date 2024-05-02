import React from "react";
import styled from "styled-components";


const Login = () => {
    const handleClick = () => {
        const clientId = "bc09d05ef6134c11a87b5aa9b15b36aa";
        const redirectUri = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
        "user-read-email", 
        "user-read-private", "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing", "user-read-playback-position",
        "user-top-read",
        "user-read-recently-played"];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
          " "
        )}&response_type=token&show_daialog=true`;
    }
    return (
        <Container>
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt="Spotify Logo" />
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100vw;
height: 100vh;
background-color: #1db954;
gap: 5rem;

img{
    height: 20vh;
}

button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: #000000;
    color: #49f585;
    font-size: 1.4rem;
    cursor: pointer;
}
`

export default Login 