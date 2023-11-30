import { useRef, useState } from "react";
import { Modal } from "./Modal";

export function PartyForm(handleForm) {
  const [name, setName] = useState("");

  const [nickname, setNickname] = useState("");
  const emailRef = useRef();
  const forms = document.querySelectorAll(".needs-validation");

  //   function onSubmit(e) {
  //     e.preventDefault();

  //     if (nickname === "") return;
  //     console.log(nickname);
  //   }

  // Example starter JavaScript for disabling form submissions if there are invalid fields

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });

  function copyLinkToClipboard() {
    const linkToCopy = "https://google.com";
    const ShareButton = document.querySelector(".share-link");
    navigator.clipboard.writeText(linkToCopy).then(() => {
      ShareButton.innerHTML = "Link Copied!";
    });
  }
  return (
    <div className="container">
      <h1 className=" mb-2 text-center">Register to join our online Party!</h1>
      <form className="needs-validation" noValidate>
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="name">Name:</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              id="name"
              placeholder="First Name"
              required
            />
            <div className="invalid-feedback">Tell us your name!</div>
          </div>
          <div className="col-sm-6">
            <label htmlFor="last">Nickname:</label>
            <input
              value={nickname}
              onChange={(e) => {
                setNickname(e.target.value);
              }}
              type="text"
              className="form-control"
              id="last"
              placeholder="How we should call you"
              required
            />
            <div className="invalid-feedback">
              We need a nickname to call you
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-3">
            <label htmlFor="form-check" className="form-check ">
              Gender Identity:
              <div className="col d-flex mt-2 justify-content-between">
                <div className="form-check me-5">
                  <input
                    name="gender"
                    type="radio"
                    id="woman"
                    className="form-check-input"
                  />
                  <label htmlFor="woman" className="form-check-label">
                    Woman
                  </label>
                </div>
                <div className="form-check me-5">
                  <input
                    name="gender"
                    type="radio"
                    id="man"
                    className="form-check-input"
                  />
                  <label htmlFor="man" className="form-check-label">
                    Man
                  </label>
                </div>
                <div className="form-check me-5">
                  <input
                    name="gender"
                    type="radio"
                    id="transgender"
                    className="form-check-input"
                  />
                  <label htmlFor="transgender" className="form-check-label">
                    Transgender
                  </label>
                </div>{" "}
              </div>
              <div className="col d-flex ">
                <div className="form-check me-5 ">
                  <input
                    name="gender"
                    type="radio"
                    id="non"
                    className="form-check-input"
                  />
                  <label htmlFor="non" className="form-check-label">
                    Non-binary
                  </label>
                </div>
                <div className="form-check ms-7">
                  <input
                    name="gender"
                    type="radio"
                    id="non"
                    className="form-check-input"
                    defaultChecked
                  />
                  <label htmlFor="non" className="form-check-label">
                    Prefer not to say
                  </label>
                </div>
              </div>
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group input-group-sm  mb-3 mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="email@example.com"
                ref={emailRef}
                required
              />
              <span className="input-group-text">Email</span>
              <div className="invalid-feedback">
                There's no party without your contact
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <select
              className="form-select form-select-sm"
              aria-label="Default select example"
              defaultValue="which"
            >
              <option value="which">Preffered Language:</option>
              <option value="1">English</option>
              <option value="2">Portuguese</option>
              <option value="3">Spanish</option>
              <option value="4">French</option>
              <option value="4">German</option>
              <option value="4">Others...</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col mt-3">
            <label htmlFor="age">Age or Birth year:</label>
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="How old are you?"
            />
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <label htmlFor="genres" className="mb-1 mt-3">
              Preffered Musical genres:
            </label>
            <div className="d-flex justify-content-between">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="electronic"
                />
                <label htmlFor="electronic" className="form-check-label">
                  Electronic
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="hiphop"
                />
                <label htmlFor="hiphop" className="form-check-label">
                  Hip hop
                </label>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="pop" />
                <label htmlFor="pop" className="form-check-label">
                  Pop
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="indie"
                />
                <label htmlFor="indie" className="form-check-label">
                  Indie
                </label>
              </div>
              <div className="form-check">
                <input
                  type="CHECKBOX"
                  className="form-check-input"
                  id="indie"
                />
                <label htmlFor="indie" className="form-check-label">
                  House
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col mt-3">
            <label htmlFor="parties">Select event you will participate:</label>
            <select
              defaultValue="friday"
              className="form-select form-select-sm "
              aria-label="Default select example"
              id="parties"
            >
              <option value="friday">late drinks TGIF (Friday) </option>
              <option value="sunday">Shake on Sunny Day (Sunday)</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col mt-3">
            {" "}
            <div className="form-check form-switch  ">
              <input
                type="checkbox"
                className="form-check-input "
                id="onOff"
                required
              />
              <label htmlFor="onOff" className="form-check-label">
                Agree to have fun!
              </label>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="  d-flex justify-content-between col mt-3 ">
            <button
              className="btn btn-outline-secondary share-link"
              type="button"
              onClick={copyLinkToClipboard}
            >
              Share
            </button>
            <button className="btn btn-outline-light " type="submit">
              I'm ready to participate!
            </button>{" "}
          </div>
        </div>
      </form>
    </div>
  );
}
