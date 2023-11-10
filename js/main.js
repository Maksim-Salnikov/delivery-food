const cardButton = document.querySelector("#card-button");
const modalWindow = document.querySelector("#modal-window");
const exitButton = document.querySelector("#exit-button");
function toggleModal(){
  modalWindow.classList.toggle("visible");
};
cardButton.addEventListener("click", toggleModal);
exitButton.addEventListener("click", toggleModal);