let random = Math.round(Math.random() * 1000);

if (random < 200) {
    console.log("Mini");
} else if (random < 500) {
    console.log("Medium");
} else if (random < 800) {
    console.log("Large");
} else {
    console.log("Super");
}