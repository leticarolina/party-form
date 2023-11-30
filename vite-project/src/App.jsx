import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import { Button } from "react-bootstrap";
import { PartyForm } from "./PartyForm";

function App() {
  function handleForm() {
    console.log("form");
  }
  return (
    <>
      <body className="d-flex mt-3 justify-content-center">
        <div className=" col-lg-6 col-md-8 col-sm-9 ">
          <div className="container">
            <h1 className=" mb-3 text-center">
              Register to join our online Party!
            </h1>
            <PartyForm handleForm={handleForm} />{" "}
          </div>
        </div>
      </body>{" "}
    </>
  );
}

export default App;
