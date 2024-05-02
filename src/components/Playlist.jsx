import React, { useEffect, useState } from "react";
import "../Css/Playlist.css"
import Sidebar from "./Sidebar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";



const Playlist = () => {
  const [{ token, selectedPlaylistId, selectedPlaylist, loading }, dispatch] =
    useStateProvider();

    const [error, setError] = useState(null);

  useEffect(() => {
    const getInitialPlaylist = async () => {
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "application/json",
            },
          }
        );

        const selectedPlaylist = {
          id: response.data.id,
          name: response.data.name,
          description: response.data.description.startsWith("<a")
            ? ""
            : response.data.description,
          image: response.data.images[0].url,
          tracks: response.data.tracks.items.map(({ track }) => ({
            id: track.id,
            name: track.name,
            image: track.album.images[0].url,
            artists: track.artists.map((artist) => artist.name).join(", "),
            duration: track.duration_ms,
            album: track.album.name,
            dateAdded: formatDate(track.added_at),
            context_uri: track.album.uri,
            track_number: track.track_number,
          })),
        };
        dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
      } catch (error) {
        console.error("Error fetching playlist:", error);
      }
    };

    // Invoke the function to fetch playlist data
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);

  function formatDate(dateSring) {
    const currentDate = new Date();
    const dateAdded = new Date(dateSring);
    const timeDifference = currentDate.getTime() - dateAdded.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (daysDifference === 1) {
      return "1 day ago";
    } else if (daysDifference > 1) {
      return `${daysDifference} days ago`;
    } else {
      return "Today"
    }
  };

  const formatDuration = (milliseconds) => {
      const totalSeconds = Math.floor(milliseconds / 1000);
      const mintues = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      return `${mintues}:${formattedSeconds}`;
  }

  if (loading) {
    return <div>Loading...</div>;
  };

  return (
    <>
      {selectedPlaylist && (
        <div>
          <div className="Playlist__body">
            <Sidebar />
            <div className="Playlist_body">
              <Navbar />
              <div className="body__contentsplaylist">
                <div className="image-span">
                  <img
                    src={selectedPlaylist.image}
                    alt="Playlist Image"
                    className="image-span"
                  />
                </div>
                <span className="playlist_song">
                  <span
                    style={{
                      position: "relative",
                      top: "4em",
                      fontWeight: "bold",
                      color: "#c9c8c8",
                    }}
                  >
                    <small>Playlist</small>
                  </span>
                  <h1>PlayList Song</h1>
                  <span
                    style={{
                      position: "relative",
                      top: "-3em",
                      fontWeight: "bold",
                      color: "#c9c8c8",
                    }}
                  >
                    <small>
                      <a
                        href="#
                  /shjhsh"
                      >
                        Song
                      </a>
                      . 6 songs, 20 min 52 sec
                    </small>
                  </span>
                </span>
              </div>

              <div className="play">
                <div style={{ marginRight: "10px" }}>
                  <button class="button_btn">
                    <svg
                      viewBox="0 0 448 512"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      width="26px"
                    >
                      <path
                        d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <button className="ellipsis-btn">
                  <FontAwesomeIcon icon={faEllipsisH} />

                  <ul className="drop-downli">
                    <li>
                      <button>
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          class="Svg-sc-ytk21e-0 ewCuAY"
                        >
                          <path d="M16 15H2v-1.5h14V15zm0-4.5H2V9h14v1.5zm-8.034-6A5.484 5.484 0 0 1 7.187 6H13.5a2.5 2.5 0 0 0 0-5H7.966c.159.474.255.978.278 1.5H13.5a1 1 0 1 1 0 2H7.966zM2 2V0h1.5v2h2v1.5h-2v2H2v-2H0V2h2z"></path>
                        </svg>

                        <span>Add to queue</span>
                      </button>
                    </li>

                    <li>
                      <button>
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          class="Svg-sc-ytk21e-0 ewCuAY"
                        >
                          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 11.395 4.277 3.504 3.504 0 0 0-1.163-1.088l-1.523-.88a.285.285 0 0 1-.076-.428l.086-.104v-.001c.549-.654.962-1.449 1.02-2.422.03-.526-.055-1.074-.165-1.395a3.23 3.23 0 0 0-.671-1.154 3.259 3.259 0 0 0-4.806 0 3.23 3.23 0 0 0-.672 1.154c-.109.32-.195.87-.163 1.395.057.973.47 1.768 1.018 2.422l.087.105a.285.285 0 0 1-.076.428l-1.523.88a3.506 3.506 0 0 0-1.163 1.088A6.475 6.475 0 0 1 1.5 8zm2.74 5.302c.173-.334.44-.62.778-.814l1.523-.88A1.784 1.784 0 0 0 7.02 8.92l-.088-.105-.002-.002c-.399-.476-.637-.975-.671-1.548a2.71 2.71 0 0 1 .087-.824 1.74 1.74 0 0 1 .357-.623 1.76 1.76 0 0 1 2.594 0c.155.17.274.378.357.623a2.716 2.716 0 0 1 .087.824c-.034.573-.272 1.072-.671 1.548l-.002.002-.088.105c-.709.85-.48 2.135.479 2.688l1.523.88c.338.195.605.48.779.814A6.47 6.47 0 0 1 8 14.5a6.47 6.47 0 0 1-3.76-1.198z"></path>
                        </svg>

                        <span>Remove from profile</span>
                      </button>
                    </li>

                    <li style={{ borderBottom: "none" }}>
                      <button>
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          class="Svg-sc-ytk21e-0 ewCuAY"
                        >
                          <path d="M11.838.714a2.438 2.438 0 0 1 3.448 3.448l-9.841 9.841c-.358.358-.79.633-1.267.806l-3.173 1.146a.75.75 0 0 1-.96-.96l1.146-3.173c.173-.476.448-.909.806-1.267l9.84-9.84zm2.387 1.06a.938.938 0 0 0-1.327 0l-9.84 9.842a1.953 1.953 0 0 0-.456.716L2 14.002l1.669-.604a1.95 1.95 0 0 0 .716-.455l9.841-9.841a.938.938 0 0 0 0-1.327z"></path>
                        </svg>

                        <span>Edit details</span>
                      </button>
                    </li>

                    <li style={{ borderBottom: "none" }}>
                      <button>
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          class="Svg-sc-ytk21e-0 ewCuAY"
                        >
                          <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                          <path d="M12 8.75H4v-1.5h8v1.5z"></path>
                        </svg>

                        <span>Delete</span>
                      </button>
                    </li>

                    <li style={{ borderBottom: "none" }}>
                      <button>
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          class="Svg-sc-ytk21e-0 ewCuAY"
                        >
                          <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                          <path d="M11.005 4.995a.75.75 0 0 1 0 1.06L9.061 8l1.944 1.945a.75.75 0 1 1-1.06 1.06L8 9.061l-1.945 1.944a.75.75 0 1 1-1.06-1.06L6.939 8 4.995 6.055a.75.75 0 1 1 1.06-1.06L8 6.939l1.945-1.944a.75.75 0 0 1 1.06 0z"></path>
                        </svg>

                        <span>Include from your taste profile</span>
                      </button>
                    </li>

                    <li className="li__movedrop">
                      <button>
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          class="Svg-sc-ytk21e-0 ewCuAY"
                        >
                          <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v11.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0 0 16 14.25v-9.5A1.75 1.75 0 0 0 14.25 3H7.82l-.65-1.125A1.75 1.75 0 0 0 5.655 1H1.75zM1.5 2.75a.25.25 0 0 1 .25-.25h3.905a.25.25 0 0 1 .216.125L6.954 4.5h7.296a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V2.75z"></path>
                        </svg>

                        <span>Move to folder</span>

                        <span style={{ position: "relative", left: "6em" }}>
                          <FontAwesomeIcon icon={faCaretRight} />
                        </span>

                        <ul className="drop-movefolder">
                          <li>
                            <button className="btnsvg">
                              <svg
                                data-encore-id="icon"
                                role="img"
                                aria-hidden="true"
                                class="Svg-sc-ytk21e-0 dYnaPI CIVozJ8XNPJ60uMN23Yg"
                                viewBox="0 0 16 16"
                              >
                                <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                              </svg>

                              <span>Find a folder</span>
                            </button>
                          </li>

                          <li>
                            <button>
                              <svg
                                data-encore-id="icon"
                                role="img"
                                aria-hidden="true"
                                viewBox="0 0 16 16"
                                class="Svg-sc-ytk21e-0 ewCuAY"
                              >
                                <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
                              </svg>

                              <span>Create folder</span>
                            </button>
                          </li>
                        </ul>
                      </button>
                    </li>

                    <li className="share_divdrop">
                      <button>
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          class="Svg-sc-ytk21e-0 ewCuAY"
                        >
                          <path d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-9.5z"></path>
                          <path d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75z"></path>
                        </svg>

                        <span>Share</span>

                        <span style={{ position: "relative", left: "9.7em" }}>
                          <FontAwesomeIcon icon={faCaretRight} />
                        </span>

                        <ul className="share__folder">
                          <li>
                            <button className="btnsvg">
                              <span
                                style={{ position: "relative", left: "1em" }}
                              >
                                <svg
                                  data-encore-id="icon"
                                  role="img"
                                  aria-hidden="true"
                                  viewBox="0 0 16 16"
                                  class="Svg-sc-ytk21e-0 ewCuAY"
                                >
                                  <path d="M5 .75A.75.75 0 0 1 5.75 0h9.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H12v-1.5h2.5v-9h-8V3H5V.75z"></path>
                                  <path d="M.75 4a.75.75 0 0 0-.75.75v10.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V4.75a.75.75 0 0 0-.75-.75H.75zm.75 10.5v-9h8v9h-8z"></path>
                                </svg>
                              </span>

                              <span
                                style={{ position: "relative", left: "1em" }}
                              >
                                Copy link to playlist
                              </span>
                            </button>
                          </li>

                          <li>
                            <button>
                              <span>
                                <svg
                                  data-encore-id="icon"
                                  role="img"
                                  aria-hidden="true"
                                  viewBox="0 0 16 16"
                                  class="Svg-sc-ytk21e-0 ewCuAY"
                                >
                                  <path d="M0 1.75A.75.75 0 0 1 .75 1h14.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1-.75-.75V1.75zm1.5.75v12h13v-12h-13z"></path>
                                  <path d="M6.962 5.47a.75.75 0 0 1 0 1.06L4.992 8.5l1.97 1.97a.75.75 0 1 1-1.06 1.06L2.87 8.5 5.9 5.47a.75.75 0 0 1 1.061 0zm2.076 0a.75.75 0 0 0 0 1.06l1.97 1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L13.13 8.5 10.1 5.47a.75.75 0 0 0-1.061 0z"></path>
                                </svg>
                              </span>

                              <span>Embed playlist</span>
                            </button>
                          </li>
                        </ul>
                      </button>
                    </li>

                    <li style={{ borderBottom: "none" }}>
                      <button>
                        <svg
                          data-encore-id="icon"
                          role="img"
                          aria-hidden="true"
                          viewBox="0 0 16 16"
                          class="Svg-sc-ytk21e-0 ewCuAY"
                        >
                          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.539a.498.498 0 0 1-.686.166c-1.878-1.148-4.243-1.408-7.028-.772a.499.499 0 0 1-.222-.972c3.048-.696 5.662-.396 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.322-5.428-1.705-7.972-.932a.624.624 0 1 1-.362-1.194c2.905-.882 6.517-.455 8.987 1.063a.624.624 0 0 1 .205.858zm.084-2.269C10.153 5.561 5.9 5.42 3.438 6.167a.748.748 0 1 1-.434-1.432c2.826-.857 7.523-.692 10.492 1.07a.748.748 0 0 1-.764 1.287z"></path>
                        </svg>

                        <span>Open in Desktop app</span>
                      </button>
                    </li>
                  </ul>
                </button>

                <div
                  style={{
                    width: "200px",
                    height: "40px",
                    position: "flex",
                    position: "relative",
                    left: "64em",
                    alignItems: "center",
                  }}
                >
                  <button className="lisckkbtn">
                    <small>List</small>

                    <svg
                      data-encore-id="icon"
                      role="img"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      class="Svg-sc-ytk21e-0 cAMMLkk"
                    >
                      <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                    </svg>

                    <div className="drop-list">
                      <div>
                        <h5>View as</h5>
                        <button className="btn__compact">
                          <svg
                            data-encore-id="icon"
                            role="img"
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            class="Svg-sc-ytk21e-0 dYnaPI"
                          >
                            <path d="M15.5 13.5H.5V12h15v1.5zm0-4.75H.5v-1.5h15v1.5zm0-4.75H.5V2.5h15V4z"></path>
                          </svg>
                          <li>Compact</li>
                        </button>
                        <button className="btn__compact">
                          <svg
                            data-encore-id="icon"
                            role="img"
                            aria-hidden="true"
                            viewBox="0 0 16 16"
                            class="Svg-sc-ytk21e-0 cAMMLk"
                          >
                            <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                          </svg>
                          <li>List</li>
                        </button>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="the__body">
                <div className="all__listitems">
                  <span>#Title</span>
                  <span>Album</span>
                  <span>Date added</span>
                  <span>
                    <svg
                      data-encore-id="icon"
                      role="img"
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      class="Svg-sc-ytk21e-0 dYnaPI"
                    >
                      <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"></path>
                      <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25z"></path>
                    </svg>
                  </span>
                </div>
                <div className="tracks">
                {error ? (
                  <div className="error">{error}</div>
                ) : (
                  selectedPlaylist.tracks.map(
                    (
                      {
                        id,
                        name,
                        artists,
                        image, // Ensure the image property is included
                        duration,
                        album,
                        dateAdded,
                        context_uri,
                        track_number,
                      },
                      index
                    ) => {
                      return (
                        <div className="row" key={id}>
                          <div className="col">
                            <span>{index + 1}</span>
                          </div>
                          <div className="col detail">
                            <div className="image">
                              {/* Use the track's image */}
                              <img
                                className="image"
                                src={image}
                                alt="track"
                                onError={() => {
                                  setError(
                                    "Error loading track image. Please try again later."
                                  );
                                }}
                              />
                            </div>
                            <div className="info">
                              <span className="name">{name}</span>
                              <span>{artists}</span>
                            </div>
                          </div>
                          <div className="col">
                            <span>{album}</span>
                          </div>
                          <div className="cold">
                          <span>{formatDate(dateAdded)}</span>
                          </div>
                          <div className="col">
                          <span>{formatDuration(duration)}</span>
                          </div>
                        </div>
                      );
                    }
                  )
                )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Playlist