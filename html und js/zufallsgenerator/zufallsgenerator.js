function generate() {
    let min = document.getElementById("min").value;
    let max = document.getElementById("max").value;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    document.getElementById("result").innerHTML = randomNumber;
}