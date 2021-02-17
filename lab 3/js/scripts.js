var list = JSON.parse(localStorage.getItem("items")) || [];

for (var i = 0; i<list.length; i++) {
    var todo = createLi(list[i].text);    
    if(list[i].done){
        todo.classList.toggle('done');
    }
    TodoList.appendChild(todo);
    var btn = createBtn(todo);
    onClick(btn);
}

document.querySelector('ul').addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.tagName = 'li'){ 
        e.target.classList.toggle('done');
        var fn = e.target.childNodes.item(0).nodeValue;
        for(var i = 0; i<list.length; ++i){
            if(list[i].text == fn){
                list[i].done = !list[i].done;
            }
        }
        update_data(list);
    }
});
// console.log(add_btn);
document.getElementsByClassName('add_btn')[0].addEventListener('click',function(e){
    e.preventDefault();
    addElem(document.getElementsByClassName('add_text')[0].value);
});

function addElem(item){
    var elem = {
        text: item,
        done: false
    } 
    if(document.getElementsByClassName('add_text')[0].value == ""){
        alert("Required data"); return;
    }
    for(var i=0; i<list.length; ++i){
        if(list[i].text==item){
            alert("The same note occupied");
            return;
        }
    }  
    
    var todo = createLi(item);
    TodoList.appendChild(todo);
    var button = createBtn(todo);
    onClick(button);
    list.push(elem);
    update_data(list);
    document.getElementsByClassName('add_text')[0].value = "";
}

function createLi(item){
    var todo = document.createElement('li');
    var t = document.createTextNode(item);
    todo.appendChild(t);
    return todo;
}

function createBtn(todo){
    var button = document.createElement('button');
    var x = document.createTextNode('x');
    button.className = "delete";
    button.appendChild(x);
    todo.appendChild(button);
    return button;
}

function onClick(button){
    button.onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
        for(var j = 0; j< list.length; ++j){
            if(div.childNodes[0].textContent == list[j].text){
                list.splice(j,1);
                console.log(list);
            }
        }
        update_data(list);
    }
}

function update_data(list){
    var Obj = JSON.stringify(list);
    localStorage.setItem("items", Obj);
    console.log(localStorage.getItem("items"));
}