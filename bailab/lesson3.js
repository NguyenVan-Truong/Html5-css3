// tạo các biến để thay đổi id và class
let username = document.querySelector("#userName")
let pass = document.querySelector("#pass")
let email = document.querySelector("#email")
let city = document.querySelector("#inputcity")
let dotuoitb = document.querySelector("#dotuoitb")
let checkbox = document.getElementsByClassName("checkbox")
let checkusername = document.querySelector("#checkUserName")
let checkpass = document.querySelector("#checkPass")
let checkemail = document.querySelector("#checkEmail")
let checkcity = document.querySelector("#checkCity")
let checkchon = document.querySelector("#chon")
let lamlai = document.querySelector("#lamlai")
let dangki = document.querySelector("#dangki")
let chon = document.querySelector("#chon")
let itemCity = document.querySelectorAll('#city option' )
const inputCheckBox = document.querySelectorAll('input[type="checkbox"]')
// tạo một mảng trống

console.log(inputCheckBox)
// city.addEventListener('change', function () {
//     console.log(this.value)
// })





let arr = [];
let isEmail =  true
let isName = true,
isPass = true,
isCity= true,
isCheckBox = false

let checkBoxvalue = ""
const checkOject = []
function checkInput () {
    for( i = 0 ; i< inputCheckBox.length ; i++) {
        if(inputCheckBox[i].checked == true) {
            isCheckBox = true
            checkOject.push(inputCheckBox[i].value)
        }
    }
}





function check1() {
    console.log(1)
    a = email.value.indexOf("@");
    dot = email.value.indexOf(".");
    if (a < 1 || dot < 1 || dot < a ) {
        checkemail.innerHTML = "*Email chưa đúng định dạng"
        isEmail = false
    } else {
        checkemail.innerHTML = ""
        isEmail=true
    }

}



let checkresult = true;
var count = 0;
function check() {
    console.log(2)
    // kiểm tra nếu form trống thì thông báo
    if (username.value.trim() == '') {
        checkusername.innerHTML = " * bắt buộc nhập tên khách hàng"
        isName=false
    } else {
        checkusername.innerHTML = ""
        isName=true
    }
    if (pass.value.trim() == '') {
        checkpass.innerHTML = " * bắt buộc nhập mật khẩu"
        isPass=false
    } else {
        checkpass.innerHTML = ""
        isPass= true
    }
    if (city.value== "") {
        checkcity.innerHTML = " * bắt buộc nhập tên thành phố"
        isCity= false
    } else {
        checkcity.innerHTML = ""
        isCity=true
    }
    
}
// check2();

function checkEnd ( ) {
    console.log(123)
    
    if ( itemCity == true && inputCheckBox == true && isEmail ==true && isName == true && isPass == true ) {
        return true
    }
    return false
}

dangki.addEventListener("click", function () {

    
    checkInput()
    check()
    check1()
    if ( isCity == true && isCheckBox == true && isEmail ==true && isName == true && isPass == true ) {

        let taikhoan = {
            username: username.value,
            pass: pass.value,
            email: email.value,
            city: city.value,
            age:dotuoitb.value,
            checkbox: checkOject.join(",")
        }
    
        arr.push(taikhoan)
        console.log(arr)
        alert("đăng kí thành công")
    }
    
    


})
lamlai.addEventListener("click", function () {

    username.value = ""

    pass.value = ""
    email.value = ""
    city.value = ""
    inputCheckBox.forEach(item => {
        item.checked = false
    })
})
