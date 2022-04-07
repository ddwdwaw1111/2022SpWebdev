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

let c = new User('zihao','wang','zxihap@gmail.com','123');
console.log(c);




