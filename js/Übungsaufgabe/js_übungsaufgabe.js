
function generate() {
    var password = new Password();
    let genertedPassword = password.generate();
    console.log(genertedPassword);
    document.getElementById("password").innerHTML = genertedPassword;
}
