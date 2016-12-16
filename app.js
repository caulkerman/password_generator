"use strict"

let checkCharactersYes = false;
let checkCharactersNo = false;
let checkNumbersYes = false;
let checkNumbersNo = false;
let checkDashesYes = false;
let checkDashesNo = false;
let characterNumber;
let newPassWord = "";
console.warn("newPassWord length: ", newPassWord, newPassWord.length);

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let lettersArray = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W", "w", "X", "x", "Y", "y", "Z", "z"]

let specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "_", "/", ":", ";", "<", ">", "=", "?", "@", "`", "~", '"', "^"];




function checkBoxCharactersYes() {
	if (checkCharactersYes) {
		checkCharactersYes = false;
		document.getElementById("checkbox-characters-yes").checked = false;
		checkCharactersNo = true;
		document.getElementById("checkbox-characters-no").checked = true;
	} else {
		checkCharactersYes = true;
		document.getElementById("checkbox-characters-yes").checked = true;
		checkCharactersNo = false;
		document.getElementById("checkbox-characters-no").checked = false;
	};
		// console.log("checkCharactersYes value: ", checkCharactersYes);
		// console.log("checkCharactersNo value: ", checkCharactersNo);

};

function checkBoxCharactersNo() {
	if (checkCharactersNo) {
		checkCharactersNo = false;
		document.getElementById("checkbox-characters-no").checked = false;
		checkCharactersYes = true;
		document.getElementById("checkbox-characters-yes").checked = true;

	} else {
		checkCharactersNo = true;
		document.getElementById("checkbox-characters-no").checked = true;
		checkCharactersYes = false;
		document.getElementById("checkbox-characters-yes").checked = false;
	};
	// console.log("checkCharactersNo value: ", checkCharactersNo);
	// console.log("checkCharactersYes value: ", checkCharactersYes);
};

function checkBoxNumbersYes() {
	if(checkNumbersYes) {
		checkNumbersYes = false;
		document.getElementById("checkbox-numbers-yes").checked = false;
		checkNumbersNo = true;
		document.getElementById("checkbox-numbers-no").checked = true;
	} else {
		checkNumbersYes = true;
		document.getElementById("checkbox-numbers-yes").checked = true;
		checkNumbersNo = false;
		document.getElementById("checkbox-numbers-no").checked = false;
	};
	// console.log("checkNumbersYes value: ", checkNumbersYes);
	// console.log("checkNumbersNo value: ", checkNumbersNo);
};

function checkBoxNumbersNo() {
	if (checkNumbersNo) {
		checkNumbersNo = false;
		document.getElementById("checkbox-numbers-no").checked = false;
		checkNumbersYes = true;
		document.getElementById("checkbox-numbers-yes").checked = true;
	} else {
		checkNumbersNo = true;
		document.getElementById("checkbox-numbers-no").checked = true;
		checkNumbersYes = false;
		document.getElementById("checkbox-numbers-yes").checked = false;
	};
	// console.log("checkNumbersNo value: ", checkNumbersNo);
	// console.log("checkNumbersYes value: ", checkNumbersYes);
};

function checkBoxDashesYes() {
	if (checkDashesYes) {
		checkDashesYes = false;
		document.getElementById("checkbox-dashes-yes").checked = false;
		checkDashesNo = true;
		document.getElementById("checkbox-dashes-no").checked = true;
	} else {
		checkDashesYes = true;
		document.getElementById("dashes").innerHTML = '<p class="dashes">' + 'Dashes will be every five characters' + '</p>';
		document.getElementById("checkbox-dashes-yes").checked = true;
			setTimeout(function() {
				document.getElementById("dashes").innerHTML = "Do you want to have dashes?";
			}, 2500);
		checkDashesNo = false;
		document.getElementById("checkbox-dashes-no").checked = false;
	};
	// console.log("checkDashesYes value: ", checkDashesYes);
	// console.log("checkDashesNo value: ", checkDashesNo);
};

function checkBoxDashesNo() {
	if (checkDashesNo) {
		checkDashesNo = false;
		document.getElementById("checkbox-dashes-no").checked = false;
		checkDashesYes = true;
		document.getElementById("dashes").innerHTML = '<p class="dashes">' + 'Dashes will be every five characters' + '</p>';
		document.getElementById("checkbox-dashes-yes").checked = true;
		setTimeout(function() {
				document.getElementById("dashes").innerHTML = "Do you want to have dashes?";
			}, 2500);
	} else {
		checkDashesNo = true;
		document.getElementById("checkbox-dashes-no").checked = true;
		checkDashesYes = false;
		document.getElementById("checkbox-dashes-yes").checked = false;
	};
	// console.log("checkDashesNo value: ", checkDashesNo);
	// console.log("checkDashesYes value: ", checkDashesYes);
};


function generatePassword(characterNumberId) {
	newPassWord = "";
	characterNumber = document.getElementById(characterNumberId).value;
	let forLoopNumber = 0;
	for (var i = 0; i < characterNumber; i++) {
		console.error("characterNumber: ", characterNumber);
		forLoopNumber += 1;

		
		if (forLoopNumber <= characterNumber &&  newPassWord.length <= characterNumber) {
			lettersFunc();
			if (checkCharactersYes /*&& newPassWord.length < characterNumber*/) {
				specialCharactersFunc();
			};

			if (checkNumbersYes /*&& newPassWord.length < characterNumber*/) {
				numbersFunc();
			}
			console.log("The for loop number: ", forLoopNumber);
			// if (forLoopNumber % 5 === 0 && checkDashesYes && newPassWord < characterNumber) {
			
			// };
		};
		if (newPassWord.length === characterNumber) {
			break;
		}	
	console.warn("In the BIG function the new password: ", newPassWord, newPassWord.length);
	document.getElementById("new-password").innerHTML = newPassWord;
	document.getElementById("characterNumberId").value = "";
	};
};



function lettersFunc() {
	let randomNumber = Math.floor(Math.random() * lettersArray.length);
	let randomLetter = lettersArray[randomNumber];
	console.log("random letter: ", randomLetter);
	newPassWord += randomLetter;
	// return something;
}

function numbersFunc() {
	let randomNumber = Math.floor(Math.random() * numbersArray.length);
	let randomArrayNumber = numbersArray[randomNumber];
	console.log("random array number: ", randomArrayNumber);
	newPassWord += randomArrayNumber;
	// return something;
}

function dashesFunc() {
	newPassWord += "-";

	// return something;
}

function specialCharactersFunc() {
	let randomNumber = Math.floor(Math.random() * specialCharactersArray.length);
	let randomCharacter = specialCharactersArray[randomNumber];
	console.log("random character: ", randomCharacter);
	newPassWord += randomCharacter;
	// return something;
}