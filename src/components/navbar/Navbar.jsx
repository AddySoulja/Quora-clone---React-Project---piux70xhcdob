import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faPenToSquare,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";
import "../navbar/navbar.css";
import { faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import Searchbar from "./Searchbar";
import AccountMenu from "./AccountMenu";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = ({ setKeyword }) => {
  return (
    <>
      <div className="navbar-layout">
        <Link to="/" className="logo-layout">
          Quora
        </Link>
        <div className="navigation">
          <Tooltip title="Home">
            <Link to="/">
              <div className="nav-link">
                <FontAwesomeIcon icon={faHouse} className="iconColor" />
              </div>
            </Link>
          </Tooltip>
          <Tooltip title="Ask">
            <Link to="/add-a-question">
              <div className="nav-link">
                <FontAwesomeIcon icon={faRectangleList} className="iconColor" />
              </div>
            </Link>
          </Tooltip>
          <Tooltip title="Answer">
            <Link to="/answer-a-question">
              <div className="nav-link">
                <FontAwesomeIcon icon={faPenToSquare} className="iconColor" />
              </div>
            </Link>
          </Tooltip>
          <Tooltip title="Spaces">
            <div className="nav-link">
              <FontAwesomeIcon icon={faUsers} className="iconColor" />
            </div>
          </Tooltip>
          <Tooltip title="Notifications">
            <div className="nav-link">
              <FontAwesomeIcon icon={faBell} className="iconColor" />
            </div>
          </Tooltip>
        </div>
        <div className="search-layout">
          <Searchbar setKeyword={setKeyword} />
        </div>
        <div className="controls-layout">
          <AccountMenu />
          <Tooltip title="Ask a question">
            <Link to="/add-a-question">
              <div className="btn">Ask</div>
            </Link>
          </Tooltip>
          <Tooltip title="Answer a question">
            <Link to="/answer-a-question">
              <div className="btn">Answer</div>
            </Link>
          </Tooltip>
        </div>
      </div>
    </>
  );
};
export default Navbar;
