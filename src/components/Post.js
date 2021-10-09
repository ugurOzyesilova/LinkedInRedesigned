import "../styles/Post.css";
import Avatar from "@material-ui/core/Avatar";
import ThumbUpAltRoundedIcon from "@material-ui/icons/ThumbUpAltRounded";
import ChatRoundedIcon from "@material-ui/icons/ChatRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import db from "../firebase";
import BackspaceOutlinedIcon from "@material-ui/icons/BackspaceOutlined";
import { ContextProvider, Context } from "../statemanagement/Context";
import React, { useContext } from "react";

const Post = (props) => {
  const deletePost = () => {
    db.collection("posts")
      .where("content", "==", props.content)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete();
      });
  };

  const { user } = useContext(Context);

  const deleteButtonRender = () => {
    if (user.displayName === props.username) {
      return (
        <>
          <BackspaceOutlinedIcon
            onClick={deletePost}
            style={{ cursor: "pointer", color: "#0197d2", marginRight: "10px" }}
          />
          <span>Delete</span>
        </>
      );
    }
  };

  const shareButtonRender = () => {
    if (user.displayName !== props.username) {
      return (
        <>
          <ShareRoundedIcon
            style={{ cursor: "pointer", color: "#0197d2", marginRight: "10px" }}
          />
          <span>Share</span>
        </>
      );
    }
  };

  return (
    <div className="post">
      <div className="post__info">
        <Avatar src={props.profilePic} />
        <span>{new Date(props.timestamp?.toDate()).toUTCString()}</span>
      </div>
      <p className="post__content">{props.content}</p>
      <div className="post__icons">
        <div>
          <ThumbUpAltRoundedIcon
            style={{ color: "#0197d2", marginRight: "10px" }}
          />
          <span>Like</span>
        </div>
        <div>
          <ChatRoundedIcon style={{ color: "#0197d2", marginRight: "10px" }} />
          <span>Comment</span>
        </div>
        <div className="post__lower">
          {shareButtonRender()}
          {deleteButtonRender()}
        </div>
      </div>
    </div>
  );
};

export default Post;
