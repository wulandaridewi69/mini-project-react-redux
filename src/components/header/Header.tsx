// @ts-nocheck
import React, { useState, useContext } from "react";
import WidgetsIcon from '@mui/icons-material/Widgets';
import Logo from '../assets/logo.png'

const Header = () => {

  const [loading, setLoading] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav className="sticky top-0 w-full px-2 py-2.5 bg-white flex justify-between drop-shadow-lg z-10">
        <div className="flex items-center font-bold text-2xl ml-10 text-[#085E7D]">
          <a id="to-homepage" href="/">
            <Logo/>
          </a>
        </div>
        {token !== "0" && (
          <div className="flex flex-row items-center justify-center ">
            <button type="button">
              <div className="text-white mr-3" onClick={handleCreate}>
                <WidgetsIcon />
              </div>
            </button>
            <button type="button">
              <div className="mr-3" onClick={handleModal}>
                <Image
                  src={LOGO}
                  alt="Picture of the author"
                  width={30}
                  height={30}
                />
              </div>
            </button>
          </div>
        )}
      </nav>
      {showModal && (
        <div
          id="dropdownDivider"
          className="z-10 fixed bg-sky-900 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600 right-7 top-16"
        >
          <ul
            className="py-1 text-sm text-white dark:text-black"
            aria-labelledby="dropdownDividerButton"
          >
            <li>
              <a href="/List">
                <a
                  id="btnList"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  My List
                </a>
              </a>
            </li>   
            <li>
              <a href="/">
                <a
                  id="home"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Home
                </a>
              </a>
            </li>          
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;