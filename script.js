var bok = document.getElementById("book");
var pab = document.getElementById("pab");
bok.addEventListener("click",myFunc);

function myFunc(){
    bok.style.transform = "rotateY(180deg)";
}



pab.addEventListener("click",myunc);
function myunc(){
    bok.style.transform = "rotateY(-90deg)";
    setTimeout(func, 2100);
    function func(){
        pab.id = "shit";
        pab.innerHTML = "SUBSCRIBE!!";
    }
}
