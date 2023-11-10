// Html elements
openButton = document.querySelector(".menu-button");
closeButton = document.querySelector(".close-button");
menuContainer = document.querySelector(".container-menu");
grayOutElement = document.querySelector(".gray-out-space");

//  Eventlistener to open the menu, by adding classes
openButton.addEventListener("click", () => {
  menuContainer.classList.add("-open");
  grayOutElement.classList.add("-active");
});

// Eventlistener to close the menu, by removing classes
closeButton.addEventListener("click", () => {
  menuContainer.classList.remove("-open");
  grayOutElement.classList.remove("-active");
});
