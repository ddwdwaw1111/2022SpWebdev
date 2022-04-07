const checkOutForm = document.getElementById("checkout-form");

const checkOut = (e)=>{
    e.preventDefault();
    c.setAddress(document.getElementById("MailingAddress").value);
    c.setPaymentInfo(
        document.getElementById("CardNumber").value,
        document.getElementById("ExpireDate").value,
        document.getElementById("CVV").value
        );
    console.log(c);
}

checkOutForm.addEventListener('submit',checkOut);

