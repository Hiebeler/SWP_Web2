class Password {
    uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    numbers = "0123456789";
    specialCharacters = "!\"§$%&/()=?*+~#'-_.:,;>|\\^°²³{[]}@€";
    uppercase;
    lowercase;
    number;
    special;
    length;

    constructor() {
        this.uppercase = document.getElementById("uppercase").checked;
        this.lowercase = document.getElementById("lowercase").checked;
        this.number = document.getElementById("number").checked;
        this.special = document.getElementById("special").checked;
        this.length = document.getElementById("length").value;
    }

    generate() {
        let availableCharacter = this.getAvailableCharacters();
        let password = "";
        for (let i = 0; i < this.length; i++) {
            password += availableCharacter.charAt(Math.floor(Math.random() * availableCharacter.length));
        }
        return password.toString();
    }

    getAvailableCharacters() {
        var availableCharacters = "";
        if (this.uppercase) availableCharacters += this.uppercaseLetters;

        if (this.lowercase) availableCharacters += this.lowercaseLetters;

        if (this.number) availableCharacters += this.numbers;

        if (this.special) availableCharacters += this.specialCharacters;

        return availableCharacters;
    }
}