var list = document.getElementsByTagName("LI");
for (var i = 0; i < list.length; i++) {
  var btn = document.createElement("BUTTON");
  var txt = document.createTextNode("x");
  btn.className = "delete";
  btn.appendChild(txt);
  list[i].appendChild(btn);
}

var del = document.getElementsByClassName("delete");
for(var i = 0; i<del.length; ++i){
    del[i].onclick = function(){
        var div = this.parentElement;
        div.style.display= "none";
    }
}

var done = document.querySelector('ul');
done.addEventListener('click', function(dn){
    if(dn.target.tagName = 'LI'){
        dn.target.classList.toggle('done');
    }
},false);


function addElem(){
    var box = document.createElement("li");
    var txt = document.getElementsByClassName("add_txt").value;

    var t = document.createTextNode(txt);
    box.appendChild(t);
    if(txt = ""){
        alert("need to add data!!!");
    }else{
        document.getElementById("TodoList").appendChild(box);
    }

    var btn = document.createElement("BUTTON");
    var txt2 = document.createTextNode("x");
    btn.className = "delete";
    btn.appendChild(txt2);
    list[i].appendChild(btn);
    box.appendChild(btn);
    for (i = 0; i < done.length; i++) {
        done[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
      }
}