import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import { ContextProvider, Context } from "./statemanagement/Context";
import React, { useContext } from "react";
import LogIn from "./components/LogIn";
function App() {
 const { user } = useContext(Context);

 

  return (
    
      <div className="App">
        {!user ? (<LogIn />) : (
          <>
            <SideBar />
            <Home />
          </>
        )}
      </div>
    
  );
}

export default App;
