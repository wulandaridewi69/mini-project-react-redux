// @ts-nocheck
import React, { useState } from "react";

import Button from "../button/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchArticles } from "../../store/Home/thunks";


const Header = () => {

  const [search, setSearch] = useState('');
  
  const dispatch = useDispatch();
  
  const handleSearch = () => {
    dispatch(fetchArticles(search));
  }

  return (
    <>
      <nav className="bg-cyan-900 pb-2 pt-2 sticky top-0 w-full rounded-b-3xl justify-between drop-shadow-lg z-10">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <a id="to-homepage" href="/">
                <img src='https://www.mygetplus.id/assets/images/getplus.svg' />
              </a>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 flex">
              <input class="form-control " type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
              <div class="bg-yellow-600 border rounded pl-2 pr-2 pt-1">
                <Button type="submit" onClick={handleSearch}><SearchIcon /></Button>
              </div>
            </div>
          </div>
        </div>

      </nav>
    </>
  );
}

export default Header;