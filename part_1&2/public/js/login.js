let userName = prompt('Please Enter Your username');
let userPassword = prompt('Please Enter Your Password');

let un = "admin";
let pw = "421$$";

if (userName != un || userPassword != pw) {
    alert("Wrong data");
    location.reload();
}

document.write("<div> “Welcome login success” </div>");