import React, {  useRef, useState, useEffect } from "react";
import "../Css/Navbar.css";
import "../App.css";
import "../Css/Madiescreennabar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false);
  const bodyRef = useRef(document.body);

  useEffect(() => {
    const bodyElement = bodyRef.current;
    let prevScrollPos = bodyElement.scrollTop;

    const handleScroll = () => {
      const currentScrollPos = bodyElement.scrollTop;
      console.log("Current scroll position:", currentScrollPos);
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down
        setNavBackground(true);
      } else {
        // Scrolling up
        setNavBackground(currentScrollPos > 0);
      }
      console.log("navBackground:", navBackground);
      prevScrollPos = currentScrollPos;
    };

    bodyElement.addEventListener('scroll', handleScroll);

    return () => {
      bodyElement.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div  className={`Container-Nav ${navBackground ? 'navBackground' : ''}`}>
      <div className="flex-allnav">
        <div className="tow-angle-div">
          <button title="Go Back">
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <button>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        <div className="tow-row-div">
          <div>
            <div class="body">
              <button class="btn btn-hover">
                <span class="btn-text">Practice now</span>
              </button>
            </div>
          </div>
          <div>
            <button className="button">
              <FontAwesomeIcon icon={faCircleDown} />
              Install App
            </button>
          </div>
          <button class="button-bell">
            <svg viewBox="0 0 448 512" class="bell">
              <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"></path>
            </svg>
          </button>

          <button className="bell-broder">
            <div className="divred"></div>

            <div className="drop-profile">
              <ul>
                <button className="flex-acct">
                  <li>Account</li>
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-label="External link"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    class="Svg-sc-ytk21e-0 kcUFwU"
                  >
                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                  </svg>
                </button>
                <button className="flex-acct">
                  <li>Profile</li>
                </button>
                <button className="flex-acct">
                  <li>Upgrade to Premium</li>
                  <svg
                    data-encore-id="icon"
                    role="img"
                    aria-label="External link"
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    class="Svg-sc-ytk21e-0 kcUFwU"
                  >
                    <path d="M1 2.75A.75.75 0 0 1 1.75 2H7v1.5H2.5v11h10.219V9h1.5v6.25a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75V2.75z"></path>
                    <path d="M15 1v4.993a.75.75 0 1 1-1.5 0V3.56L8.78 8.28a.75.75 0 0 1-1.06-1.06l4.72-4.72h-2.433a.75.75 0 0 1 0-1.5H15z"></path>
                  </svg>
                </button>
                <button className="flex-acct">
                  <li>Settings</li>
                </button>
                <div className="flex-accts">
                  <button class="Btn">
                    <div class="sign">
                      <svg viewBox="0 0 512 512">
                        <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                      </svg>
                    </div>

                    <div class="text">Logout</div>
                  </button>
                </div>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
