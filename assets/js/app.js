const toggleBtn = document.querySelector(".app__btn--toggle");

function changeImageSource() {
  if (
    toggleBtn.src ===
    window.location.origin + "/assets/icons/icon-hamburger.svg"
  ) {
    toggleBtn.src = window.location.origin + "/assets/icons/icon-close.svg";
  } else {
    toggleBtn.src = window.location.origin + "/assets/icons/icon-hamburger.svg";
  }
}

toggleBtn.addEventListener("click", changeImageSource);
