import 
{ getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } 
from './main.js'


let user = getCurrentUser();

if(!user) window.location.href = "login.html";

let profile = document.getElementById("profile");
profile.innerHTML = `
    <div class="col-8 offset-4">
  <h2>Welcome back, ${user.firstName} ${user.lastName}!</h2>
  <div>
    <p class="error"></p>
    <button class="" id="edit">Edit Info</button>
    <button class="" id="delete">Delete Account</button>
  </div>
  </div>
`;

document.getElementById("edit").addEventListener('click', editProfile);
document.getElementById("delete").addEventListener('click', deleteAccount);

function editProfile() {
  profile.classList.toggle("hide");
  let editForm = document.getElementById("editForm");
  editForm.innerHTML = `
  <div  class="col-8 offest-4 d-flex justify-content-center">
    <div class="row">
    <form id="form" class="basic-form col-12">
      <p class="error"></p>
      <h2>Edit Profile</h2>
      <label for="username">Change Username</label>
      <input type="text" name="username" id="username" placeholder="${user.userName}">
      <br>
      <input type="submit" value="Submit">
    </form>
    <form id="passForm" class="basic-form mb-4 col-12">
      <p class="error"></p>
      <h2>Change Password</h2>
      <label for="pswd">Change Password</label>
      <input type="password" name="pswd" id="pswd">
      <br>
      <input type="submit" value="Submit">
    </form>
    <button id="cancel" class="col-4">Cancel</button>
    <div class="row">
   <div>
  `;

  editForm.addEventListener('submit', editAccount)
  document.getElementById("cancel").addEventListener('click', (e) => {
    window.location.href = "profile.html";
  })
}

function editAccount(e) {
  e.preventDefault();

  let userName = document.getElementById("username").value;
  if(userName === user.userName) {
    let err = "No changes made";
    document.querySelector("#editForm p.error").innerHTML = err;
  } else {
    fetchData('/users/edit', {userId: user.userId, userName: userName}, "PUT")
    .then((data) => {
      if(!data.message) {
        removeCurrentUser();
        setCurrentUser(data);
        window.location.href = "profile.html"
      }
    })
 
    .catch((error) => {
       const errText = error.message;
       document.querySelector("#editForm p.error").innerHTML = errText;
       console.log(`Error! ${errText}`)
     });
  
  }
}

function deleteAccount() {
  if(confirm('Are you sure you want to delete your account???')) {
    fetchData('/users/delete', {userId: user.userId}, "DELETE")
    .then((data) => {
      if(!data.message) {
        console.log(data.success)
        logout();
        window.location.href = "register.html"
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#profile div p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    })
  }
}