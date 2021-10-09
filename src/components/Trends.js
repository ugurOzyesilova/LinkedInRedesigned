import React from 'react'
import "../styles/Trends.css";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import StarHalfRoundedIcon from "@material-ui/icons/StarHalfRounded";
import StarOutlineRoundedIcon from "@material-ui/icons/StarOutlineRounded";
function Trends() {
    return (
      <div className="trends">
        <img
          src="https://blog.kmk.net.tr/upload/news/1200x628/frontend_backend_web_gelistirme.jpg"
          alt=""
        />
        <h4>How to become PRO Frontend Developer</h4>
        <div>
          <StarRoundedIcon style={{ color: "#0197d2" }} />
          <StarRoundedIcon style={{ color: "#0197d2" }} />
          <StarHalfRoundedIcon style={{ color: "#0197d2" }} />
          <StarOutlineRoundedIcon style={{ color: "#0197d2" }} />
          <StarOutlineRoundedIcon style={{ color: "#0197d2" }} />
        </div>
        <ul>
          <li>Blame Backend Developers</li>
          <li>Blame Backend Developers</li>
          <li>Blame Backend Developers</li>
          <li>Blame Backend Developers</li>
        </ul>
      </div>
    );
}

export default Trends
