function setDarkMode() {
    document.documentElement.classList.remove("light")
    document.documentElement.classList.add("dark");
    document.getElementById("toggleMode").innerHTML = '<img src="./assets/lightMode.svg" alt="Light Mode">'
    window.localStorage.setItem("mode", "dark");
}

function setLightMode() {
    document.documentElement.classList.remove("dark")
    document.documentElement.classList.add("light");
    document.getElementById("toggleMode").innerHTML = '<img src="./assets/darkMode.svg" alt="Dark Mode">'
    window.localStorage.setItem("mode", "light");
}

function toggleMode() {
    if (localStorage.getItem("mode") === "dark") {
        setLightMode();
    } else {
        setDarkMode();
    }
}

function initializeMode() {
    console.log("initializeMode");
    if (localStorage.getItem("mode") === "dark") {
        setDarkMode();
    } else if (localStorage.getItem("mode") === "light") {
        setLightMode();
    } else {
        window.localStorage.setItem("mode", "dark");
    }
}

initializeMode();