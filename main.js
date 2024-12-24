let parentDiv = document.getElementById("parent-div");
let itemInput = document.getElementById("item-input");
let addBtn = document.getElementById("add-btn");
let itemList = document.getElementById("item-ul");

function addItems(){
    let itemInputData = itemInput.value;
    let li = document.createElement("li");
    li.innerText = itemInputData;
    itemList.appendChild(li)
    itemInput.value =""
    itemInput.focus();
    let trashBtn = document.createElement('i');
    trashBtn.classList.add('fa-solid','fa-trash');
    li.appendChild(trashBtn);
    
}

addBtn.addEventListener("click",addItems)