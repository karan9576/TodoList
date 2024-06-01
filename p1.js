let input=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");



btn.addEventListener("click",function(){

let li=document.createElement("li");
li.innerText=input.value;
let button=document.createElement("button");
button.innerText='delete';
ul.appendChild(li);
li.appendChild(button)
button.classList.add("delete");
input.value="";

});
ul.addEventListener('click',function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }

});

