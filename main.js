const input = document.querySelector('input');

const addBtn = document.querySelector('.add');

  const lowerDiv = document.querySelector('.lower-box');

let temp = null;
let tempTodo = null;



function clickAdd(){
  
  const inputText = input.value.trim();
  
  if(inputText.length <= 0){
    alert("write something");
    
  // }else if(addBtn.innerHTML == "Edit"){
   
  // temp.target.previousElementSibling.innerText = inputText;
   
  // addBtn.innerHTML = "Add";
  // input.value="";
   
  // editLocal(inputText);
    
    }else {
    
    const pTag = document.createElement('p');
    pTag.innerText = inputText;
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = "Edit";
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Delete";
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
  
    
    lowerDiv.appendChild(todoDiv);
    todoDiv.appendChild(pTag);
    // todoDiv.appendChild(editBtn);
    // todoDiv.appendChild(deleteBtn);
    
    input.value = "";
    
    saveLocal(inputText);
  };
  
};

// function updationFun(e){
  
//   if(e.target.innerHTML =="Delete"){
//     lowerDiv.removeChild(e.target.parentElement);
//     deleteLocal(e.target.parentElement);
//   }
//   if(e.target.innerHTML =="Edit"){
    
//     input.value = e.target.previousElementSibling.innerText;
    
//     input.focus();
    
//     addBtn.innerHTML = "Edit";
//     temp = e;
//     tempTodo = input.value; 
//   }
// };

function saveLocal(items){
  let todoList;
  
  if(localStorage.getItem("toDoList") === null){
    todoList = [];
  }else{
    todoList = JSON.parse(localStorage.getItem("toDoList"));
  }
  
  todoList.push(items);
  localStorage.setItem("toDoList",JSON.stringify(todoList));
};

function getSaveLocal(){
  
 let todoList;
 
 if (localStorage.getItem("toDoList") === null) {
   todoList = [];
 } else {
   todoList = JSON.parse(localStorage.getItem("toDoList"));
 }
 
 todoList.forEach(items=>{
   
   const pTag = document.createElement('p');
    pTag.innerText = items;
    
    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = "Edit";
    
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerText = "Delete";
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
  
    
    lowerDiv.appendChild(todoDiv);
    todoDiv.appendChild(pTag);
    // todoDiv.appendChild(editBtn);
    // todoDiv.appendChild(deleteBtn);
    
 })
};

// function deleteLocal(data){
  
//   const child = data.firstElementChild.innerText;
  
//   let todoList;
  
//   if (localStorage.getItem("toDoList") === null) {
//     todoList = [];
//   } else {
//     todoList = JSON.parse(localStorage.getItem("toDoList"));
//   }
   
//   const index = todoList.indexOf(child);  

//   todoList.splice(index,1);
  
//   localStorage.setItem("toDoList", JSON.stringify(todoList));
// };

// function editLocal(item){
  
  
//   let todoList = JSON.parse(localStorage.getItem("toDoList"));
//   let index = todoList.indexOf(tempTodo);
//   todoList[index]= item;
//   localStorage.setItem("toDoList",JSON.stringify(todoList));
// };


addBtn.addEventListener('click', clickAdd);
// lowerDiv.addEventListener('click', updationFun);
window.addEventListener('load', getSaveLocal);