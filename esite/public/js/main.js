const nav = document.getElementById('navList');
if(getCurrentUser()) {
    nav.innerHTML = `
            <li class="nav-item">
                  <button class="nav-link " id="logout">Logout</button>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/Profile.html">Profile</a>
            </li>
              <li class="nav-item">
                  <a class="nav-link " aria-current="page" >Welcome,${getCurrentUser().userName}</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/Product.html">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link " href="/Cart.html">Cart</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link " href="/Contact.html">Contact Us</a>
              </li>
              <li class="nav-item">
                  <a href="" class="nav-link"><i class="fa fa-shopping-bag" aria-hidden="true"></i> <span id="cart" ></span></a>
              </li>
  `;
} else {
  nav.innerHTML = `
              <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="./Product.html">Home</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link " href="/Login.html">Login</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="/Register.html">New User</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link " href="/Cart.html">Cart</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link " href="/Contact.html">Contact Us</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href=""><i class="fa fa-shopping-bag " aria-hidden="true"></i> <span id="cart" ></span></a>
              </li>
  `
}

// Fetch method implementation:
export async function fetchData(url = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${url}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}

export function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function removeCurrentUser() {
  localStorage.removeItem('user')
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export const logoutBtn = document.getElementById("logout");
if(logoutBtn) logoutBtn.addEventListener('click', logout)

export function logout() {
  removeCurrentUser();
  window.location.href = "login.html";
}
