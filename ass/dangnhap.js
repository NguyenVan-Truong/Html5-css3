let name = document.querySelector("#name")
let checkname = document.querySelector("#checkname")
let password = document.querySelector("#password")
let checkpass = document.querySelector("#checkpass")
let btn = document.querySelector("#btn")

function check() {
    let checkresult = true;
    let cout = 0;
    if (name.value.trim() == "") {
        checkname.innerHTML = "Nhập Tên Đăng Nhập"
        cout += 1;
    } else {
        checkname.innerHTML = ''

    }
    if (pass.value.trim() == "") {
        checkpass.innerHTML = "Nhập Mật Khẩu"
        cout += 1
    } else {
        checkpass.innerHTML = ""
    }
    //    }else if(pass.value.length < 6 ){
    //        checkpass.innerHTML="Mật khẩu quá ngắn"
    //        checkresult = true;
    //    }else if(pass.value.length >10){
    //         checkpass.innerHTML="Mật khẩu quá dài"
    //         checkresult = true;
    //    }else{
    //        checkpass.innerHTML=''
    //        checkresult = false; 
    if (cout > 0) { checkresult = false } else if (cout = 0) {
        checkresult = true
    }
    console.log(cout)

    return checkresult;
}
btn.addEventListener("click", function () {
    if (check() == true) {
        alert("Đăng Nhập Thành Công")
    } else {
        alert("Không Đăng Nhập Thành Công")
    }
})

let ten = document.querySelector("#ten")
let checkten = document.querySelector("#checkten")
let mk = document.querySelector("#mk")
let checkmk = document.querySelector("#checkmk")
let nlmk = document.querySelector("#nlmk")
let checknlmk = document.querySelector("#checknlmk")
let email = document.querySelector("#email")
let checkemail = document.querySelector("#checkemail")
let btn789 = document.querySelector("#btn789")

function check12() {
    let checkresult = false;
    let a = email.value.indexOf('@')
    let b = email.value.indexOf('.')
    if (ten.value.trim() == "") {
        checkten.innerHTML = "Nhập Tên Đăng Nhập"
        checkresult = true;
    } else {
        checkten.innerHTML = ''
        checkresult = false;
    }
    if (mk.value.trim() == "") {
        checkmk.innerHTML = "Nhập Mật Khẩu"
        checkresult = true;
    } else if (mk.value.length < 6) {
        checkmk.innerHTML = "Mật khẩu quá ngắn"
    } else if (mk.value.length > 10) {
        checkmk.innerHTML = "Mật khẩu quá dài"
    } else {
        checkmk.innerHTML = ''
        checkresult = false;
    } if (nlmk.value.trim() == "") {
        checknlmk.innerHTML = "Hãy Nhập Lại"
        checkresult = true;
    } else if (nlmk.value != mk.value) {
        checknlmk.innerHTML = 'Mật Khẩu Không Khớp'
    } else {
        checknlmk.innerHTML = ''
        checkresult = false;
    } if (email.value.trim() == "") {
        checkemail.innerHTML = "Nhập Email"
        checkresult = true;
    } else if (a < 1 || (b - a < 2)) {
        checkemail.innerHTML = "Nhập Sai email"
    } else {
        checkemail.innerHTML = ""
        checkresult = false;
    }
    return checkresult;
}
btn789.addEventListener("click", function () {
    if (check12() == false) {
        alert("Đăng Ký Thành Công")
    } else {
        alert("Không Tạo Thành Công")
    }
    
})
