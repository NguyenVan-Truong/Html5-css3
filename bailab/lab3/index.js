var vLeftButton = document.getElementById("iconL");
function leftAction(){
    var myimg = document.getElementById("divimg");
    var child= myimg.children[0]
    myimg.removeChild(child)
    myimg.appendChild(child)
}

function rightAction(){
    var myimg = document.getElementById("divimg");
    var child= myimg.children[0]
    myimg.removeChild(child)
    myimg.appendChild(child)
}

function showimg(vSrc){
    var vbigimg = document.getElementById("bigimg");  
    vbigimg.innerHTML="<img src= ' "+ vSrc +" '>";
    vbigimg.style.display="block"
    document.getElementById("divimg".style.opacity="0.5")
}