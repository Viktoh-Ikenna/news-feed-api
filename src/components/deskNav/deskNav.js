import React, { useState,useContext } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { BsDash } from "react-icons/bs";
import "./deskNav.css";
import { Link } from "react-router-dom";
import {SideBar} from '../mobile/SideBar'
import {observer} from 'mobx-react';
import { ThemeContext } from "../..";


const DeskNav = observer((props) => {
  const [search, SetSearch] = useState(false);
  const [textInput, setText] = useState(false);
  const [animate, setAnime] = useState({});
  const [toggle, setToggle] = useState(false);
  const [change, setChange] = useState(false);
  const handleSearch = () => {
    SetSearch(!search);
    setTimeout(() => {
      if(window.screen.width>600) setAnime({ width: "60%" });
      document.querySelector('.space').style.width='20%';
      setAnime({ width: "75%" });
    }, 0);
  };
  const handleText = (e) => {
    if (e.target.value !== "") {
      setText(true);
    } else {
      setText(false);
    }
  };
  const mobileToggle=()=>{
    setToggle(!toggle);
    setTimeout(() => {
      setChange(!change)
    }, 6);
  }
  const store = useContext(ThemeContext)
  return (
    <div>
        {toggle?<SideBar change={change}/>:''}
      <div className="site_menu">
        <div className="site_menu_div">
          Country
         <select>
         <option value="ng" key="">Nigeria</option>
           <option value="us" key="">Us</option>
           <option value="ru" key="">Russia</option>
           <option value="ar" key="">United Arab Emirates</option>
           <option value="ar" key="">Argentina</option>

         </select>
        </div>
        <div>
          <div>fb</div>
          <div>yt</div>
          <div>tw</div>
          <div>ig</div>
        </div>
      </div>
      <div className="category_menu">
        <div>
          <Link to="/" style={{ color: "white" }}>
            Logo
          </Link>
        </div>
        <div className="space"></div>
        {!search ? (
          <>
            {" "}
            
            <div className="categories">
            <div>Home</div>
              <div>
                News <MdKeyboardArrowDown />
                <ul className="submenu">
                  <li>Terrible</li>
                  <li>Politics</li>
                  <li>accidents</li>
                </ul>
              </div>
              <div>Updates</div>
              <div>Contact Us</div>
              <div>others</div>
            </div>
            <div className="search_btn" onClick={handleSearch}>
              <RiSearch2Line />
            </div>
            <div className={`nav_toggle_menu ${toggle?'toggle_it':''}`} onClick={mobileToggle}>
              <div></div>
            </div>
          </>
        ) : (
          <div style={animate} className="nav_searchBox">
            <input
              onKeyUp={handleText}
              type="text"
              placeholder="Search for anything by name"
            />
            {textInput ? (
              <span
                onClick={() => {
                  document.querySelector(".nav_searchBox input").value = "";
                  setText(!textInput);
                }}
              >
                <GrClose />
              </span>
            ) : (
              <></>
            )}
            <span
              onClick={() => {
                setAnime({ width: "20%" });
                setTimeout(() => {
                  SetSearch(!search);
                  window.screen.width<600?
                  document.querySelector('.space').style.width='55%':document.querySelector('.space').style.width='30%';
                }, 350);
              }}
            >
              <BsDash />
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
)
export default DeskNav;
