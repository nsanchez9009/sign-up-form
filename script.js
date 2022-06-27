const password = document.querySelector("input[name=password]");
const confirmPass = document.querySelector("input[name=confirmPass]");

function validPass(){
    console.log(password.value);
    console.log(confirmPass.value);
    if (password.value === confirmPass.value){
        return true;
    }
    else {
        alert("Passwords do not match. Try again.")
        return false;
    }
}