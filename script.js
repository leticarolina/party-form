const forms = document.querySelectorAll(".needs-validation");
const ShareButton = document.querySelector(".share-link");

Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      const nickname = document.getElementById("nickname");
      const newNickname = document.querySelector(".new-nickname");
      newNickname.innerHTML = nickname;
      form.classList.add("was-validated");
    },
    false
  );
});

ShareButton.addEventListener("click", () => {
  const linkToCopy = "https://google.com";
  navigator.clipboard.writeText(linkToCopy).then(() => {
    ShareButton.innerHTML = "Link Copied!";
  });
});
