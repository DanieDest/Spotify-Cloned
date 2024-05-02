import React from "react";
import "../Css/Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Playlists from "./Playlists";
import "../Css/Sidebarmadiescreen.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
      <div>
         <div className="homeBar">
              <div>
                <ul>
                    <li className="wrapLi">
                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                            className="Svg-sc-ytk21e-0 bneLcE home-active-icon QbaKKdcHNA2x3_YJvpYu"
                            viewBox="0 0 24 24">
                            <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 
                            1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"></path>
                        </svg>
                        <Link className="home" to="/">Home</Link>
                    </li>
                </ul>
              </div>

              <div className="sreach">
                <ul>
                    <li className="wrapLii">
                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                            className="Svg-sc-ytk21e-0 bneLcE search-icon QbaKKdcHNA2x3_YJvpYu" viewBox="0 0 24 24">
                            <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 
                    15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 
                    22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 
                    20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 
                    10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 
                    6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 
                    10.5579Z"></path>
                        </svg>
                        <Link className="home" to="/search">Search</Link>
                    </li>
                </ul>
              </div>
        </div>

        <div className="LibraryDiv">
            <div className="yourLib">
                <span title="Collapse Your Library" className="span-lib">
                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                        viewBox="0 0 24 24" className="Svg-sc-ytk21e-0 bneLcE" style={{ cursor: "pointer" }}>
                        <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 
                1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 
                1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 
                1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>

                    <strong style={{ marginLeft: "15px", color: "#c5c4c4", cursor: "pointer" }}>Your Library</strong>
                </span>
            </div>

            <div className="btn-div">
                <button className="btn-plus">
                    <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faPlus} />

                    <div className="drop-div" >
                        <div className="create-new-playlist" >
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI">
                                <path d="M2 0v2H0v1.5h2v2h1.5v-2h2V2h-2V0H2zm11.5 2.5H8.244A5.482 5.482 
                                0 0 0 7.966 1H15v11.75A2.75 2.75 0 1 1 12.25 10h1.25V2.5zm0 9h-1.25a1.25 
                                1.25 0 1 0 1.25 1.25V11.5zM4 8.107a5.465 5.465 0 0 0 1.5-.593v5.236A2.75 2.75 
                                0 1 1 2.75 10H4V8.107zM4 11.5H2.75A1.25 1.25 0 1 0 4 12.75V11.5z"></path>
                            </svg>

                            <Link to="/playlist">
                            <span style={{ marginLeft: "10px" }}>Create a new playlist</span>
                            </Link>

                        </div>
                        <div className="create-playlist-folder">
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI">
                                <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v11.5C0 15.216.784 
                            16 1.75 16h12.5A1.75 1.75 0 0 0 16 14.25v-9.5A1.75 1.75 0 0 0 14.25 
                            3H7.82l-.65-1.125A1.75 1.75 0 0 0 5.655 1H1.75zM1.5 2.75a.25.25 0 0 1 
                            .25-.25h3.905a.25.25 0 0 1 .216.125L6.954 4.5h7.296a.25.25 0 0 1 
                            .25.25v9.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V2.75z"></path>
                            </svg>

                            <span style={{ marginLeft: "10px" }}>Create a playlist folder</span>

                        </div>
                        <div className="create-playlist-upload">
                            <div className="input-div">
                                <input className="input" name="file" type="file" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em"
                                    height="1em" strokeLinejoin="round" strokeLinecap="round"
                                    viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor"
                                    className="icon">
                                    <polyline points="16 16 12 12 8 16"></polyline>
                                    <line y2="21" x2="12" y1="12" x1="12"></line><path
                                        d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                    <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                            </div>
                            <span style={{ marginLeft: "8px" }}>Upload Songs</span>
                        </div>

                    </div>
                </button>

                <button className="btn-arrow">
                    <FontAwesomeIcon style={{ fontSize: "18px" }} icon={faArrowRight} />
                </button>
            </div>

            <Playlists />
        </div>
      </div>
    );
};

export default Sidebar;
