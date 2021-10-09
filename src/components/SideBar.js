import React from 'react'
import '../styles/SideBar.css'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExploreRoundedIcon from '@material-ui/icons/ExploreRounded';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import BookmarksRoundedIcon from '@material-ui/icons/BookmarksRounded';

function SideBar() {
  return (
    <div className="sidebar">
      <img src="https://treasurer.delaware.gov/wp-content/uploads/sites/55/2020/09/linkedin.png" alt="" />
      <div className ="sidebar__links">
        <div className="sidebar__link">
          <HomeRoundedIcon />
          <h2>Home</h2>
          
        </div>
        <div className="sidebar__link">
          <ExploreRoundedIcon/>
          <h2>Explore</h2>
          
        </div>
        <div className="sidebar__link">
          <NotificationsActiveRoundedIcon />
          <h2>Notifications</h2>
          
        </div>
        <div className="sidebar__link">
          <EmailRoundedIcon />
          <h2>Messages</h2>
          
        </div>
        <div className="sidebar__link">
          <BookmarksRoundedIcon />
          <h2>Bookmarks</h2>
          
        </div>

        <div className="sidebar__link">
          <MoreHorizRoundedIcon />
          <h2>More</h2>
          
        </div>
      </div>
      <h2>uur.is()</h2>
      


    </div>
  )
}

export default SideBar

