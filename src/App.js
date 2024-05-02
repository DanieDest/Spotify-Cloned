import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Login from "./components/Login";
import { reducerCases } from './utils/Constants';
import { useStateProvider } from "./utils/StateProvider";
import Spotify from './components/Spotify';
import Search from './components/Search';
import Playlist from './components/Playlist';

function App() {
  const [{ token }, dispatch] = useStateProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      dispatch({ type: reducerCases.SET_TOKEN, token });
    }
  }, [token, dispatch]);

  return (
    <Router> {/* Wrap your application with Router */}
      <div>
        <Routes>
          <Route path="/" element={token ? <Spotify /> : <Login />} />
          <Route path="search" element={<Search />} />
          <Route path="playlist" element={<Playlist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
