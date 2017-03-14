const element=document.getElementById('addTodo');
let localStorage;
let todos;
element.addEventListener('click',function(){
    let value=document.getElementById('addTodoItem').value;
    if (value){
        addtolist(value);
        document.getElementById('addTodoItem').value='';
    let todos=[];
    todos.push(value);
    localStorage.setItem('todo',JSON.stringify(todos));
    gettodos();
    addtolist();
    }
});





function addtolist(text){
    let item=document.createElement('li');
    item.innerText=text;
    let list=document.getElementById('todoList');
    list.appendChild(item);
   let remove=document.createElement('button');
   remove.style.border='none';
   
  
  

    remove.innerText='delete';
    item.appendChild(remove);
    remove.addEventListener('click',removeitem);
    let value=document.getElementById('addTodoItem').value;

    
}

function gettodos(){
    let str=localStorage.getItem('todo');
    if (str !== null){
        todos=JSON.parse(str);
    }
    return todos;
}
 function removeitem(){   
    let item=this.parentNode;
    let parent=item.parentNode;
    parent.removeChild(item);
    let todos=gettodos();
    localStorage.setItem('todo',JSON.stringify(todos));
}

let add=document.querySelector('ol');
add.addEventListener('click',function(ev)
{
   if (ev.target.tagName==='LI'){
    ev.target.classList.toggle('checked');
   }
},false);



    













