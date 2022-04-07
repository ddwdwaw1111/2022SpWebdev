const LoginForm = document.getElementById("login-form");

const login = (e) =>{
    e.preventDefault();
    console.log('login');
    location.href = ('../html/Product.html')
}

LoginForm.addEventListener('submit', login);