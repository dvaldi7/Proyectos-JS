window.addEventListener("load", () => {

    //Elementos del DOM

    let number = document.querySelector(".load-number");
    let btn = document.querySelector(".load-btn");
    let complete = document.querySelector(".load-complete");
    let background = document.querySelector(".main-background");

    //Variables contadores
    let percent = 1;
    let blur = 10;

    btn.addEventListener("click", (event) => {

        btn.style.display = "none";

        let inter = setInterval( () => {
            percent++;
            blur -= 10 / 100;
            
            if (percent > 100){
                clearInterval(inter);
                complete.style.display = "block";
            }else{
                number.innerHTML = percent + "%";
                background.style.filter = `blur(${blur}px)`;
            }
        }, 20);
        
    });
}); 