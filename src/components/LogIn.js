import "../styles/LogIn.css"
import { ContextProvider, Context } from "../statemanagement/Context";
import React, { useContext } from "react";

const LogIn = () => {

    const {signIn} = useContext(Context)

    return (
      <div className="login">
        <img
          src="https://i.pinimg.com/originals/d3/3b/d9/d33bd9baa83a336184055c07dc8ccaa8.gif"
          alt=""
        />
        <button onClick={signIn}>Sıgn-In with Google</button>
      </div>
    );
}

export default LogIn
