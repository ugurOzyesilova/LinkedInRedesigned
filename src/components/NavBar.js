import { ContextProvider, Context } from "../statemanagement/Context";
import React, { useContext } from "react";
import "../styles/NavBar.css";
import SearchIcon from "@material-ui/icons/Search";
import Avatar from "@material-ui/core/Avatar";

function NavBar() {
  
  const {user} = useContext(Context);


  return (
    <div className="navbar">
      <div className="navbar__search">
        <SearchIcon
          style={{ color: "#dbd3d3", fontSize: "4.5vh", padding: "10px" }}
        />
        <input type="text" placeholder="Search on definitely not LinkedIn" />
      </div>
      <div className="navbar__user">
        <Avatar src = {user.photoURL} style={{ height: "4vh", width: "4vh", filter:"grayScale(1)"}} />
        <h3>Hey, {user.displayName} !</h3>
      </div>
    </div>
  );
}

export default NavBar;
