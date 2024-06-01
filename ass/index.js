var img=["banner1.jpg","banner2.jpg","banner3.jpg","banner4.jpg","banner.jpg"]
var index ;
var play123

function next(){
    if(index < img.length-1){
        index++
    }else{
        index=0
    }
    document.getElementById("anh").src=img[index]
}

function quaylai(){
    if(index >0 ){
        index--
    }else{
        index= img.length-1
    }
    document.getElementById("anh").src=img[index]
}

function play(){
    play123=setInterval(next,1000)
}

function stop(){
    clearInterval(play123)
}
play()

let btn= document.querySelector("#btn")
let btn2= document.querySelector("#btn2")
let btn3= document.querySelector("#btn3")
let btn4= document.querySelector("#btn4")
let btn5= document.querySelector("#btn5")
let btn6= document.querySelector("#btn6")
let btn7= document.querySelector("#btn7")
let btn8= document.querySelector("#btn8")
let btn9= document.querySelector("#btn9 ")
btn.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})
btn2.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})
btn3.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})
btn4.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})
btn5.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})
btn6.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})
btn7.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})
btn8.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})
btn9.addEventListener('click', function(){
    alert("Bận Đã Thêm Vào GIỏ Hàng Thành Công")
})

