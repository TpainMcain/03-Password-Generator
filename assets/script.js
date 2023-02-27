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
    // Validates if user leaves field blank
    if (!enter) {
        alert("Please try again with a valid value.");
    // Validates if user selected a number 8-128. || = OR.
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(promt("Please select password length between 8-128 characters."));
    // Prompts continue after user validation
    } else {
        userNumber = confirm("Do you want your password to contain numbers?");
        userCharacter = confirm("Do you want your password to contain special characters?");
        userUppercase = confirm("Do you want your password to contain uppercase letters?");
        userLowercase = confirm("Do you want your password to contain lowercase letters?");
    };
    // Validates if user selected 4 invalid options. && = AND.
    if (!userCharacter && !userNumber && !userUpper && !userLower) {
        choices = alert("You must select valid criteria!");
    }
    // Begin if else statements that use user input. Concat = MERGE ARRAYS.
    // Validates if user selected 4 valid options.
    else if (userCharacter && userNumber && userUpper && userLower) {
        choices = character.concat(number, alphaLower, alphaUpper);
    }
    // Validates if user selected 3 valid options.
    else if (userCharacter && userNumber && userUpper) {
        choices = character.concat(number, alphaUpper);
    }
    else if (userCharacter && userNumber && userLower) {
        choices = character.concat(number, alphaLower);
    }
    else if (userCharacter && userLower && userUpper) {
        choices = character.concat(alphaLower, alphaUpper);
    }
    else if (userNumber && userLower && userUpper) {
        choices = number.concat(alphaLower, alphaUpper);
    }
    // Validates if user selected 2 valid options.
    else if (userCharacter && userNumber) {
        choices = character.concat(number);
    }
    else if (userCharacter && userLower) {
        choices = character.concat(alphaLower);
    }
    else if (userCharacter && userUpper) {
        choices = character.concat(alphaUpper);
    }
    else if (userLower && userNumber) {
        choices = alphaLower.concat(number);
    }
    else if (userLower && userUpper) {
        choices = alphaLower.concat(alphaUpper);
    }
    else if (userNumber && userUpper) {
        choices = number.concat(alphaUpper);
    }
    // Validates if user selected 1 valid option.
    else if (userCharacter) {
        choices = character;
    }
    else if (userNumber) {
        choices = number;
    }
    else if (userLower) {
        choices = alphaLower;
    }
    else if (userUpper) {
        choices = blank.concat(alphaUpper);
    };

}