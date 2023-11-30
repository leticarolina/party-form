import { useState, Fragment } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";

import { Button } from "react-bootstrap";
import { PartyForm } from "./PartyForm";

function App() {
  return (
    <>
      <div className=" main mt-5 mb-5 ">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="myrow  col-sm-12 col-md-8 col-lg-4">
            <PartyForm />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
