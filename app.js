"use strict"

let checkCharactersYes = false;
let checkCharactersNo = false;
let checkNumbersYes = false;
let checkNumbersNo = false;
let checkDashesYes = false;
let checkDashesNo = false;
let characterNumber;
let newPassWord = "";
let forLoopNumber;
console.warn("newPassWord length: ", newPassWord, newPassWord.length);

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let lettersArray = ["B", "b", "C", "c", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "V", "v", "W", "w", "X", "x", "Z", "z"];

let vowelsArray = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];

let specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "_", "/", ":", ";", "=", "@", "`", "~", '"', "^"];

let funcArray = [];


function checkBoxCharactersYes() {
	if (checkCharactersYes) {
		checkCharactersYes = false;
		document.getElementById("checkbox-characters-yes").checked = false;
		checkCharactersNo = true;
		document.getElementById("checkbox-characters-no").checked = true;
		for (let i = 0; i < funcArray.length; i++) {
			if (funcArray[i] === specialCharactersFunc) {
				funcArray.splice([i], 1);
				break;
			};
		};
		console.log("funcArray: ", funcArray);
	} else {
		checkCharactersYes = true;
		document.getElementById("checkbox-characters-yes").checked = true;
		checkCharactersNo = false;
		document.getElementById("checkbox-characters-no").checked = false;
		funcArray.push(specialCharactersFunc);
		console.log("funcArray: ", funcArray);
	};

};

function checkBoxCharactersNo() {
	if (checkCharactersNo) {
		checkCharactersNo = false;
		document.getElementById("checkbox-characters-no").checked = false;
		checkCharactersYes = true;
		document.getElementById("checkbox-characters-yes").checked = true;
		funcArray.push(specialCharactersFunc);
		console.log("funcArray: ", funcArray);
	} else {
		checkCharactersNo = true;
		document.getElementById("checkbox-characters-no").checked = true;
		checkCharactersYes = false;
		document.getElementById("checkbox-characters-yes").checked = false;
		for (let i = 0; i < funcArray.length; i++) {
			if (funcArray[i] === specialCharactersFunc) {
				funcArray.splice([i], 1);
				break;
			};
		};
		console.log("funcArray: ", funcArray);
	};
};

function checkBoxNumbersYes() {
	if(checkNumbersYes) {
		checkNumbersYes = false;
		document.getElementById("checkbox-numbers-yes").checked = false;
		checkNumbersNo = true;
		document.getElementById("checkbox-numbers-no").checked = true;
		for (let i = 0; i < funcArray.length; i++) {
			if (funcArray[i] === numbersFunc) {
				funcArray.splice([i], 1);
				break;
			};
		};
		console.log("funcArray: ", funcArray);
	} else {
		checkNumbersYes = true;
		document.getElementById("checkbox-numbers-yes").checked = true;
		checkNumbersNo = false;
		document.getElementById("checkbox-numbers-no").checked = false;
		funcArray.push(numbersFunc);
		console.log("funcArray: ", funcArray);
	};
};

function checkBoxNumbersNo() {
	if (checkNumbersNo) {
		checkNumbersNo = false;
		document.getElementById("checkbox-numbers-no").checked = false;
		checkNumbersYes = true;
		document.getElementById("checkbox-numbers-yes").checked = true;
		funcArray.push(numbersFunc);
		console.log("funcArray: ", funcArray);
	} else {
		checkNumbersNo = true;
		document.getElementById("checkbox-numbers-no").checked = true;
		checkNumbersYes = false;
		document.getElementById("checkbox-numbers-yes").checked = false;
		for (let i = 0; i < funcArray.length; i++) {
			if (funcArray[i] === numbersFunc) {
				funcArray.splice([i], 1);
				break;
			};
		};
		console.log("funcArray: ", funcArray);
	};
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
				document.getElementById("dashes").innerHTML = '<p class="dashes-checked">' + 'Do you want to have dashes?' + '</p>';
			}, 2000);
		checkDashesNo = false;
		document.getElementById("checkbox-dashes-no").checked = false;
	};
};

function checkBoxDashesNo() {
	if (checkDashesNo) {
		checkDashesNo = false;
		document.getElementById("checkbox-dashes-no").checked = false;
		checkDashesYes = true;
		document.getElementById("dashes").innerHTML = '<p class="dashes">' + 'Dashes will be every five characters' + '</p>';
		document.getElementById("checkbox-dashes-yes").checked = true;
		setTimeout(function() {
				document.getElementById("dashes").innerHTML = '<p class="dashes-checked">' + 'Do you want to have dashes?"' + '</p>';
			}, 2000);
	} else {
		checkDashesNo = true;
		document.getElementById("checkbox-dashes-no").checked = true;
		checkDashesYes = false;
		document.getElementById("checkbox-dashes-yes").checked = false;
	};
};


function generatePassword(characterNumberId) {
	forLoopNumber = 0;
	newPassWord = "";
	characterNumber = document.getElementById(characterNumberId).value;

	for (var i = 0; i < characterNumber; i++) {
		forLoopNumber += 1;

		if (forLoopNumber <= characterNumber &&  newPassWord.length <= characterNumber) {
			
			let randomNumber = Math.floor(Math.random() * funcArray.length);
			funcArray[randomNumber]();
		};
	};
	document.getElementById("characterNumberId").value = "";
	if (!characterNumber) {
		document.getElementById("new-password").innerHTML = '<p id="new-password-id">' + 'You must enter a number of characters' + '</p>';
		setTimeout(function() {
			document.getElementById("new-password").innerHTML = '<p>' + 'New password goes here.' + '</p>';
		}, 2000);
	} else {
		document.getElementById("new-password").innerHTML = newPassWord;
		console.warn("In the BIG function the new password: ", newPassWord, newPassWord.length);
	}
	
};



let lettersFunc = function() {
	if (newPassWord.length < characterNumber) {
		let randomNumber = Math.floor(Math.random() * lettersArray.length);
		let randomLetter = lettersArray[randomNumber];
		newPassWord += randomLetter;
		dashesFunc();
		// console.log("newPassWord.length: ", newPassWord.length);

		if (characterNumber - newPassWord.length > 1) {
			for (let i = 0; i < 2; i++) {
				let randomNumber = Math.floor(Math.random() * vowelsArray.length);
				let randomVowel = vowelsArray[randomNumber];
				console.log("random vowel: ", randomVowel);
				
				let splitNewPassword = newPassWord.split("");
				
				if (splitNewPassword[splitNewPassword.length -1] === "y" || splitNewPassword[splitNewPassword.length -1 === "Y"]) {
					break;
				}
				newPassWord += randomVowel;
				dashesFunc();
				console.log("new password: ", newPassWord);
				
			};
				
		} else { //this makes sure if there is only room for one more letter that only one more will be used.
			if (characterNumber - newPassWord.length === 1) {
			let randomNumber = Math.floor(Math.random() * vowelsArray.length);
			let randomVowel = vowelsArray[randomNumber];
			newPassWord += randomVowel;
			dashesFunc();
			};
		};
	};
};
funcArray.push(lettersFunc);
console.log(funcArray);


let numbersFunc = function() {
	if (checkNumbersYes && newPassWord.length < characterNumber) {
		let randomNumber = Math.floor(Math.random() * numbersArray.length);
		let randomArrayNumber = numbersArray[randomNumber];
		newPassWord += randomArrayNumber;
		dashesFunc();
	};
};

let dashesFunc = function() {
	let modulusNumber = newPassWord.length % 6;
	if (checkDashesYes && modulusNumber === 0 && newPassWord.length < characterNumber) {
	newPassWord += "-";
	};
};

let specialCharactersFunc = function() {
	if (checkCharactersYes && newPassWord.length < characterNumber) {
		let randomNumber = Math.floor(Math.random() * specialCharactersArray.length);
		let randomCharacter = specialCharactersArray[randomNumber];
		newPassWord += randomCharacter;
		dashesFunc();
	};
};






