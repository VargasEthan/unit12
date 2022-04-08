let userNum = document.getElementById("getNumber");
userNumber.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        run(e);
    }
});

userNumber.focus();

function run() {
    document.getElementById("paragraph").innerHTML = "Hello User!!!";
    document.getElementById("paragraph").style.backgroundColor = "black";
    document.getElementById("paragraph").style.color = "#ffffff";
    document.getElementById("paragraph").style.padding = "20px";
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "#280cc1";
    x.style.color = "#ffffff";
    x.style.padding = "20px";
    x.style.textAlign = "center";
    return ran;
}

function userNumber() {
    let user = documnet.getElementById("getNumber").value;
    let y = document.getElementById("userNumber");
    y.innerHTML = user;
    y.style.color = "white";
    y.style.backgroundColor = "#ff00e2";
    y.style.padding = "20px";
    y.style.textAlign = "center";
    return user;
}

function compareNumber() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare");
    let c = document.getElementById("counter");

    if ( a!= b) {
        z.innerHTML = "Numbers are not the same. Computer got " 
        + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "ff0000";
        z.style.padding = "20px";
        z.style.textAlign = "center";
        c.innerHTML = "You have tried " + counter + " times.";
        c.style.color = "white";
        c.style.backgroundColor = "#312f2f";
        c.style.padding = "20px";
        c.style.textAlign
        document.querySelector("body").style.backgroundColor = "#ff9c9c";
    }else if ( a == b) {
        z.innerHTML = "Numbers are the same. Computer got " + b + ", and user got " + a;
        z.style.color = "white";
        z.style.backgroundColor = "00ff00";
        z.style.padding = "20px"
        z.textAlign = "center";
        c.innerHTML = "You have tried " + counter + " times you got it right."
        c.style.color = "white";
        c.style.backgroundColor = "#312f2f";
        c.style.padding = "20px"
        c.style.textAlign = "center";
        counter = 0;
        document.querySelector("body").style.backgroundColor = "#e4ff9c"
    }    
    
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}


