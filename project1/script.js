$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

$("#num1").countMe(20,20);
$("#num2").countMe(50,100);
$("#num3").countMe(50,100);
$("#num4").countMe(40,10);


function validate() {
    let username = document.contact.username.value;
    let mobile = document.contact.mobile.value;
    let email = document.contact.email.value;
    let message = document.contact.message.value;
    let userStatus = mobileStatus = emailStatus = messageStatus = false;
    let alphaExp = /^[a-zA-Z]+$/;
    let numExp = /^[0-9]+$/;
    let emailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // name validation
    if (username === "") {
        document.getElementById("userNote").innerHTML = "Please enter your Username";
    } else {
        if (username.match(alphaExp)) {
            document.getElementById("userNote").innerHTML = "";
            userStatus = true;
        } else {
            document.getElementById("userNote").innerHTML = "Only Characters";
        }
    }
    // email
    if (email === "") {
        document.getElementById("emailNote").innerHTML = "Please enter your Email Id";
    } else {
        if (email.match(emailExp)) {
            document.getElementById("emailNote").innerHTML = "";
            emailStatus = true;
        } else {
            document.getElementById("emailNote").innerHTML = "Invalid Email Id";
        }
    }

    // mobile number
    if (mobile === "") {
        document.getElementById("mobileNote").innerHTML = "Please enter your Mobile Number";
    } else {
        if (mobile.match(numExp)) {
            if (mobile.length === 10) {
                document.getElementById("mobileNote").innerHTML = "";
                mobileStatus = true;
            } else {
                document.getElementById("mobileNote").innerHTML = "Please enter 10 Digit Mobile Number";
            }
        } else {
            document.getElementById("mobileNote").innerHTML = "Only Digits";
        }
    }
    // message
    if (message === "") {
        document.getElementById("messageNote").innerHTML = "Please write a message";
    } else {
        document.getElementById("messageNote").innerHTML = "";
        messageStatus = true;
    }
    // return status
    if (userStatus === true && mobileStatus === true && emailStatus === true && messageStatus === true) {
        return true;
    } else {
        return false;
    }
}
