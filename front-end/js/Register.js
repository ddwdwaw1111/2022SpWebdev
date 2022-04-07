const addUser = (e) => { 
    e.preventDefault();

    let newUser = new User(
        document.getElementById("FirstName").value,
        document.getElementById("LastName").value,
        document.getElementById("email").value,document.
        getElementById("password").value
        )

    console.log('new user created');
    console.log(newUser)
    document.forms[0].reset();
}


const u = new User('zihao','wang','zihaowang999@gmail.com','123');

const form = document.getElementById("register-form");
form.addEventListener('submit', addUser);