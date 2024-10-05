let tableContainer = document.querySelector(".tables");
let result = 0;

for(let i = 1; i <= 10; i++){
    
    tableContainer.innerHTML += `
        <div class="tables_item">
            <h2 class="tables_title">
                Tabla del ${i}
            </h2>
            <ul class="tables_list tables_list--${i}">
            </ul>
        </div>
        `;

    for(let n = 1; n <= 10; n++){
        
        result = i * n;
        
        let list = document.querySelector(".tables_list--" + i);

        list.innerHTML += `<li class="list_item">${i + " x " + n + " = " + result}</li>`;
        }
}