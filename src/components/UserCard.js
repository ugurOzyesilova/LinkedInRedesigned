import { ContextProvider, Context } from "../statemanagement/Context";
import React, { useContext, useState, useEffect } from "react";
import "../styles/UserCard.css";
import Avatar from "@material-ui/core/Avatar";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FlashOnOutlinedIcon from "@material-ui/icons/FlashOnOutlined";
import db from "../firebase";

function UserCard() {
  const { user } = useContext(Context);

  const [count, setCount] = useState([0]);

  useEffect(() => {
    db.collection("posts")
      .get()
      .then(function (querySnapshot) {
        setCount(querySnapshot.size);
      });
  }, []);

  return (
    <div className="usercard">
      <div className="usercard__main">
        <div className="usercard__upper">
          <Avatar
            src={user.photoURL}
            style={{
              height: "6.5vh",
              width: "6.5vh",
              filter: "grayScale(0.6)",
            }}
          />
          <h2>{user.displayName}</h2>
          <span>@{user.displayName.toLowerCase()}</span>
          <div>
            <LocationOnIcon style={{ color: "#8c9096", height: "1.9vh" }} />
            <span>Somewhere, Turkey</span>
          </div>
        </div>
        <div className="usercard__info">
          <div>
            Total Posts<span>{count}</span>
          </div>
          <div>
            Total Users <span>2</span>
          </div>
          <div>
            Following <span>0</span>
          </div>
        </div>
      </div>

      <div className="usercard__actions">
        <div>
          <VisibilityOutlinedIcon
            style={{ color: "#0197d2", fontSize: "5vh" }}
          />
          <span>Activity</span>
        </div>
        <div>
          <FlashOnOutlinedIcon style={{ color: "#0197d2", fontSize: "5vh" }} />
          <span>Moments</span>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
