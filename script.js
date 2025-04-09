var btm = document.querySelector("#btm")
clutter = ""
names = ["user1","user2","user3","user4","user5","user6","user7","user8","user9","user10"]
for(i=1;i<=10;i++){
    clutter += `${'<div id="people"><h3></h3></div><br>'}`;
    btm.innerHTML = clutter;
    var ppl = document.querySelectorAll("#btm #people h3");
    k = 0
    ppl.forEach(function(elem){
        elem.innerHTML = names[k]
        k++;
    })
}

var user = document.querySelector("#userProfile")
div = "";
for(i=0;i<names.length;i++){
    div += `'<div id="user${i+1}" class= "user"></div>'`;
    user.innerHTML = div;
}
var ppl = document.querySelectorAll("#btm #people");
j =1
ppl.forEach(function(elem){
    elem.addEventListener("click",() => {
        if (document.querySelector(`#user${j}`).style.display == "none") {
            document.querySelector(`#user${j}`).style.display = "block";
        }
        else{
            document.querySelector(`#user${j}`).style.display = "none";
        }
    })
})

document.querySelector("#searchbar").addEventListener('input',()=>{
    
})