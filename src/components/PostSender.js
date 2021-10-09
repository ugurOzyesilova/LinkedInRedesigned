import "../styles/PostSender.css";
import Avatar from "@material-ui/core/Avatar";
import { ContextProvider, Context } from "../statemanagement/Context";
import React, { useContext, useState } from "react";
import db from "../firebase";
import firebase from "firebase";
import { nanoid } from "nanoid";

const PostSender = () => {
  const { user } = useContext(Context);
  const [input, setInput] = useState("");

      const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("posts").add({
          content: input,
          username: user.displayName,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          profilePic: user.photoURL,
          id: nanoid()
        });
        setInput("");
      };

  

  return (
    <div className="postsender">
      <div className="postsender__content">
        <Avatar src={user.photoURL} />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`What's on your mind ${user.displayName} ?`}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>
        SEND POST
      </button>
    </div>
  );
};

export default PostSender;
