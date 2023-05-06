const login = document.querySelector("#login");
const userNameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const submit = document.querySelector("#submit");
const UserLogin = {
  username: "admin",
  password: "@Admin123"
};

//Check username
function isName(username) {
  if(username !== UserLogin.username){
    return false;
  }
  return true;
}

//Check password
function isPassword(password) {
  if(password !== UserLogin["password"]){
    return false;
  }
  return true;
}


submit.addEventListener("click", (event) => {
  event.preventDefault();

  const usernameIP = userNameInput.value.trim();
  const passwordIP = passwordInput.value.trim();

  //Kiểm tra tính xác thực
  if (usernameIP === "" || passwordIP === "") {
    alert("Nhập vào ô còn trống.");
  } else if (!isName(usernameIP)) {
    alert("Sai tên đăng nhập.");
  } else if (!isPassword(passwordIP)) {
    alert("Sai mật khẩu.");
  }else{
    alert("Đăng nhập tạo thành công!");
    login.reset();
  }
});

console.log(UserLogin.username); // Output: "admin"
console.log(UserLogin["password"]); // Output: "@Admin123"



