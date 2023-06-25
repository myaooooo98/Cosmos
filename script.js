const modal = document.querySelector(".modal");
const btn = document.querySelector(".trigger");
const closebtn = document.querySelector("#close");

function toggleModal() {
    modal.classList.toggle("showModal");
}

function windownOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

btn.addEventListener("click", toggleModal);
closebtn.addEventListener("click", toggleModal);
window.addEventListener("click", windownOnClick);