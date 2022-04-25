import 
{ fetchData, getCurrentUser, setCurrentUser, removeCurrentUser } 
from './main.js'

class User { 
    constructor(firstName, lastName, email, password) { 
        this.userId = '123';
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.address = "";
        this.paymentInfo = {
            cardNumber: '',
            expireDate: '',
            code: ''
        }
    }

    getUserId()
    {
        return this.userId;
    }

    setUserId(userId)
    {
        this.userId = userId;
    }
    
    getFirstName()
    {
        return this.firstName;
    }

    setFirstName(firstName)
    {
        this.firstName = firstName;
    }
    
    getLastName()
    {
        return this.lastName;
    }

    setLastName(lastName)
    {
        this.lastName = lastName;
    }
    
    getEmail()
    {
        return this.email;
    }

    setEmail(email)
    {
        this.email = email;
    }
    
    getPassword()
    {
        return this.password;
    }

    setPassword(password)
    {
        this.password = password;
    }

    getAddress()
    {
        return this.address;
    }

    setAddress(address)
    {
        this.address = address
    }

    getPaymentInfo()
    {
        return this.paymentInfo;
    }

    setPaymentInfo(CardNumber,ExpireDate,code)
    {
        this.paymentInfo.cardNumber = CardNumber;
        this.paymentInfo.expireDate = ExpireDate;
        this.paymentInfo.code = code;
    }
    
}

const loginForm = document.getElementById("login-form");
if(loginForm) loginForm.addEventListener('submit', login);

//Login Func
function login(e) {
    e.preventDefault();
    console.log('loginfunc')
    const name = document.getElementById("email").value;
    const pswd = document.getElementById("password").value;
    fetchData('/users/login', {username: name, password: pswd}, "POST")
    .then((data) => {
      if(!data.message) {
        setCurrentUser(data);
        window.location.href = "Product.html";
        updateForm
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#login-form p.error").innerHTML = errText;
      document.getElementById("pswd").value = "";
      console.log(`Error! ${errText}`)
    });
  }
  
  const regForm = document.getElementById("register-form");
  if(regForm) regForm.addEventListener('submit', register);


//Regist Func
function register(e) {
    e.preventDefault();
  
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const userName = document.getElementById("email").value;
    const pswd = document.getElementById("pswd").value;
    const cpswd = document.getElementById("cpswd").value;

    if(pswd !== cpswd)
    {
        const errText =  "Password not same";
        document.querySelector("#register-form p.error").innerHTML = errText;
        return
    }

    fetchData('/users/register', {firstname:firstName, lastname:lastName,userName:userName,password:pswd,cpassword:cpswd}, "POST")
    .then((data) => {
      if(!data.message) {
        setCurrentUser(data);
        window.location.href = "Product.html";
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#register-form p.error").innerHTML = errText;
      document.getElementById("pswd").value = "";
      document.getElementById("cpswd").value = "";

      console.log(`Error! ${errText}`)
    });
  }
//
