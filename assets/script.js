// Assignment code here

// Declare user variables.
var enter;
var userNumber;
var userCharacter;
var userUpper;
var userLower;

// Define special characters.
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "[", "]", ";", "'", ",", ".", "{", "}", "|", ":", "<", ">", "?"
];

// Define numeric characters.
number = [0,1,2,3,4,5,6,7,8,9];

// Define alphabetical characters.
alphaLower = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"
];

// blank is for upper case conversion.
blank = [];

// choices is delcared outside if statement for concatenation.
var choices;

// function and variable for uppercase conversion.
var makeUpper = function (x) {
    return x.toUpperCase();
};

alphaUpper = alphaLower.map(makeUpper);

// Event listener for generate button. Create ps variable.
var get = document.querySelector("#generate");

get.addEventListener("click", function (){
    ps = generatePassword();
    document.getElementById("generate").placeholder = ps;
});

// Begin function to generate ps.
function generatePassword() {
    // Prompts for user input
    enter = parseInt(prompt("Please select a length for Password (8-128 characters):"));
    // Begin if else hell for user validation.
    
}