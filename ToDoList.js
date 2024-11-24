let inputbox = document.getElementById("input-box");
let addBtn = document.querySelector(".add");
let todoContainer = document.querySelector(".container");
let listContainer =  document.getElementById("list-container");
function addTask(){
    addBtn.addEventListener("click",() => {
        if(inputbox.value === ""){
            alert("you must write something")
        }else{
            let li = document.createElement("li");
            li.className = "ahmed"
            li.innerHTML = inputbox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "x";
            li.appendChild(span)
        };
        inputbox.value= "";
        inputbox.focus(); 
        addToLocalStorage()
    });
}
addTask()
listContainer.addEventListener("click",(e) => {
    if(e.target.className === "ahmed"){
        e.target.classList.toggle("checked")
        addToLocalStorage()
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        addToLocalStorage()
    }
},false);
function addToLocalStorage(){
    window.localStorage.setItem("data", listContainer.innerHTML)
} 
function addToPageFrom(){
    listContainer.innerHTML = window.localStorage.getItem("data")
}
addToPageFrom()

