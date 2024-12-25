let parentDiv = document.getElementById("parent-div");
let itemInput = document.getElementById("item-input");
let addBtn = document.getElementById("add-btn");
let itemList = document.getElementById("item-ul");
let itemInputData


function setItems(){
    localStorage.setItem("itemName",itemInputData)
}

function getItems(){
    if(localStorage.getItem("itemName")){
    itemInputData=localStorage.getItem("itemName")
    ui();
    }
}

function ui(){
    let li = document.createElement("li");
    li.innerText = itemInputData;
    itemList.appendChild(li)
    itemInput.value =""
    itemInput.focus();
    let trashBtn = document.createElement('i');
    trashBtn.classList.add('fa-solid','fa-trash');
    li.appendChild(trashBtn);

}

function addItems(){
    itemInputData = itemInput.value;

    setItems();

    getItems();
 
    
}

function deleteItems(event){
    if(event.target.classList[0]=== "fa-solid"){
        let item = event.target.parentElement;
        item.remove();
    }

}

addBtn.addEventListener("click",addItems)
document.addEventListener('keypress', function(event) {
	if (event.key === 'Enter') {
        addItems()
	    itemInput.value = "";
	}
});

itemList.addEventListener('click',deleteItems)
getItems();
