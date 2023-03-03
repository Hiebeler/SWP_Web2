// Erstelle zwei Zufallszahl zwischen 0 und 100 

let random = Math.round(Math.random() * 100); 
let random2 = Math.round(Math.random() * 100);

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50 

// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini" 

if (random < random2 && random < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30 

// dann gib aus "Eine der beiden ist kleiner als 30" 

if (random < 30 || random2 < 30) {
    console.log("Eine der beiden ist kleiner als 30");
}


// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist 

// dann gib aus "Erste Zahl klein, zweite kein 50iger" 

if (random < 50 && random2 != 50) {
    console.log("Erste Zahl klein, zweite kein 50iger");
}

let motoradführerschein = Math.random() > 0.5 ? true : false;
let probeführerschein = Math.random() > 0.5 ? true : false;
let alter = Math.round(Math.random() * 100);

if (alter > 24 && motoradführerschein && !probeführerschein) {
    console.log("Du darfst Motorrad fahren");
} else {
    console.log("Du darfst nicht Motorrad fahren");
}

let kindAlter = Math.floor(Math.random() * (20 - 0)) + 20;
let elternteilDabei = Math.random() > 0.5 ? true : false;

if ((kindAlter < 14 && elternteilDabei) || kindAlter >= 14) {
    console.log("Du darfst ins Kino");
} else {
    console.log("Du darfst nicht ins Kino");
}

let berufserfahrung = Math.floor(Math.random() * (10 - 0)) + 10;
let codingCampus = Math.random() > 0.5 ? true : false;

if (berufserfahrung > 2 || codingCampus) {
    console.log("Du darfst den Kurs Softwarearchitekturen besuchen");
} else {
    console.log("Du darfst den Kurs Softwarearchitekturen nicht besuchen");
}

let berufserfahrung2 = Math.floor(Math.random() * (10 - 0)) + 10;
let master = Math.random() > 0.5 ? true : false;
let leumdungszeugnis = Math.random() > 0.5 ? true : false;

if (berufserfahrung2 > 5 && master && leumdungszeugnis) {
    console.log("Du hast eine chance auf eine Anstellung");
} else {
    console.log("Du hast keine chance auf eine Anstellung");
}