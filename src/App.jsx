import { useCallback, useEffect } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import User from "./components/User";
import axios from "axios";
import { postCode } from "./api";

const code = new URLSearchParams(window.location.search).get("code");

function App() {

  useEffect(()=> {
    if(code) handlePost()
    window.history.pushState("page2","title","/")
  },[])

  const handlePost = async() => {
    const response = await postCode(code)
    console.log(response);
  }

  return (
    <>
      <Navbar />
      {code ? <User /> : <Login />}
    </>
  );
}

export default App;
