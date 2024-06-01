let ten = document.querySelector("#ten")
let mk = document.querySelector("#mk")
let email = document.querySelector("#email")
let city = document.querySelector("#city")
let checkten = document.querySelector("#checkten")
let checkmk = document.querySelector("#checkmk")
let checkemail = document.querySelector("#checkemail")
let checkcity = document.querySelector("#checkcity")
let btn = document.querySelector("#btn")


function check(){
    let checkresult = false;
    let a = email.value.indexOf('@')
    let b = email.value.indexOf('.')
    if(ten.value.trim()==""){
        checkten.innerHTML=" Bắt Buộc Nhập Tên"
        checkreult=false;
    }else{
        checkten.innerHTML=""
    }
    if(mk.value.trim()==""){
        checkmk.innerHTML=" Bắt Buộc nhập Mật Khảu"
    }else{
        checkmk.innerHTML=""
    }if(email.value.trim()==""){
        checkemail.innerHTML=="Bạn Chưa NHập Email"
    }if(email.value.trim()==""){
        checkemail.innerHTML="bạn Nhập vào"
    }else if(a < 1 || ( b - a < 2 )){
        checkemail.innerHTML="Bạn Nhập Sai"
    }else{
        checkemail.innerHTML=""
        checkresult = false;
    }
    return checkresult; 
}





btn.addEventListener("click",function(){
    check()
})