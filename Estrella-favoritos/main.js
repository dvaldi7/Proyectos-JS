window.addEventListener("DOMContentLoaded", () => {

    let grey = document.querySelector(".grey");
    let yellow = document.querySelector(".yellow");

    grey.addEventListener("click", () =>{
        yellow.classList.add("visible");
    });

    yellow.addEventListener("click", () =>{
        yellow.classList.remove("visible");
    });
});