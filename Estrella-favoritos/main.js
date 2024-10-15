window.addEventListener("DOMContentLoaded", () => {

    let grey = document.querySelector(".main-star--grey");
    let yellow = document.querySelector(".main-star--yellow");

    grey.addEventListener("click", () =>{
        yellow.classList.add("visible");
        grey.classList.add("yellow-color");
    });

    yellow.addEventListener("click", () =>{
        yellow.classList.remove("visible");
        grey.classList.remove("yellow-color");
    });
});