"use strict"

console.log("WELCOME TO THE PASSWORD GENERATOR")
let checkCharactersYes = false;
let checkCharactersNo = false;
let checkNumbersYes = false;
let checkNumbersNo = false;
let checkDashesYes = false;
let checkDashesNo = false;
let forLoopNumber;
let inputtedNumber; 
let tempNewPassWord = "";
let newPassWord = "";
// console.warn("newPassWord length: ", newPassWord, newPassWord.length);

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
		// console.log("funcArray: ", funcArray);
	} else {
		checkCharactersYes = true;
		document.getElementById("checkbox-characters-yes").checked = true;
		//function call
		checkCharactersNo = false;
		document.getElementById("checkbox-characters-no").checked = false;
		funcArray.push(specialCharactersFunc);
		// console.log("funcArray: ", funcArray);
	};

};

function checkBoxCharactersNo() {
	if (checkCharactersNo) {
		checkCharactersNo = false;
		document.getElementById("checkbox-characters-no").checked = false;
		checkCharactersYes = true;
		document.getElementById("checkbox-characters-yes").checked = true;
		//function call
		funcArray.push(specialCharactersFunc);
		// console.log("funcArray: ", funcArray);
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
		// console.log("funcArray: ", funcArray);
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
		// console.log("funcArray: ", funcArray);
	} else {
		checkNumbersYes = true;
		document.getElementById("checkbox-numbers-yes").checked = true;
		checkNumbersNo = false;
		document.getElementById("checkbox-numbers-no").checked = false;
		funcArray.push(numbersFunc);
		// console.log("funcArray: ", funcArray);
	};
};

function checkBoxNumbersNo() {
	if (checkNumbersNo) {
		checkNumbersNo = false;
		document.getElementById("checkbox-numbers-no").checked = false;
		checkNumbersYes = true;
		document.getElementById("checkbox-numbers-yes").checked = true;
		funcArray.push(numbersFunc);
		// console.log("funcArray: ", funcArray);
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
		// console.log("funcArray: ", funcArray);
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


function generatePassword() {
	// debugger;
	forLoopNumber = 0;
	newPassWord = "";
	inputtedNumber = document.getElementById("characterNumberId").value;

	for (let i = 0; i < inputtedNumber; i++) {

		if (forLoopNumber <= inputtedNumber &&  newPassWord.length <= inputtedNumber) {
				
			let randomNumber = Math.floor(Math.random() * funcArray.length);
			funcArray[randomNumber]();
		};
		forLoopNumber += 1;
		console.log("tempPassword in generatePassword: ", tempNewPassWord);
			// console.log("for loop number dashes checked No: ", forLoopNumber)
	};	
	noInputWarning();
	// forLoopNumber = 0;
};



let lettersFunc = function() {
	if (newPassWord.length < inputtedNumber) {
		console.log("the inputtedNumber: ", inputtedNumber);
		let randomNumber = Math.floor(Math.random() * lettersArray.length);
		let randomLetter = lettersArray[randomNumber];
		

		if (checkDashesYes) {
			tempNewPassWord += randomLetter;
			dashesFunc();
		} else {
			newPassWord += randomLetter;
			dashesFunc();
		};
		
		if (inputtedNumber - newPassWord.length > 1) {
			for (let i = 0; i < 2; i++) {
				let randomNumber = Math.floor(Math.random() * vowelsArray.length);
				let randomVowel = vowelsArray[randomNumber];
				
				let splitNewPassword = newPassWord.split("");
				
					if (splitNewPassword[splitNewPassword.length -1] === "y" || splitNewPassword[splitNewPassword.length -1 === "Y"]) {
						break;
					}
				
					if (checkDashesYes) {
						tempNewPassWord += randomVowel;
						dashesFunc();
						break;
					} else {
						newPassWord += randomVowel;
						// dashesFunc();
					}	
			};
		} else { //this makes sure if there is only room for one more letter that only one more will be used.
			if (inputtedNumber - newPassWord.length === 1) {
				let randomNumber = Math.floor(Math.random() * vowelsArray.length);
				let randomVowel = vowelsArray[randomNumber];
			
				if (checkDashesYes) {
					tempNewPassWord += randomVowel;
				} else {
					newPassWord += randomVowel;
					// dashesFunc();
				};
			};
		};
	};
};
funcArray.push(lettersFunc);
// console.log(funcArray);


let numbersFunc = function() {
	if (checkNumbersYes && newPassWord.length < inputtedNumber) {
		let randomNumber = Math.floor(Math.random() * numbersArray.length);
		let randomArrayNumber = numbersArray[randomNumber];

		if (checkDashesYes) {
			tempNewPassWord += randomArrayNumber;
			dashesFunc();
		} else {
			newPassWord += randomArrayNumber;
			// dashesFunc();
		};
	};
};



let dashesFunc = function() {

	if (tempNewPassWord.length >= 5) {//I use the >= so the tempNewPassword does not exceed a lngth of 5.  Using just === allows the newtempPassword to exceed a length of 5 and wont allow dashes to insert anymore, the tempNewPassword isn't allowed to reset, 
		console.log("tempNewPassWord: ", tempNewPassWord);
		newPassWord += tempNewPassWord;
		tempNewPassWord = "";
		if (newPassWord.length < inputtedNumber) {
			newPassWord += "-";
		};
	};
};



let specialCharactersFunc = function() {
	if (checkCharactersYes && newPassWord.length < inputtedNumber) {
		let randomNumber = Math.floor(Math.random() * specialCharactersArray.length);
		let randomCharacter = specialCharactersArray[randomNumber];

		if (checkDashesYes) {
			tempNewPassWord += randomCharacter;
			dashesFunc();
		} else {
			newPassWord += randomCharacter;
			// dashesFunc();
		};
	};
};


function noInputWarning() {
	document.getElementById("characterNumberId").value = "";
	if (!inputtedNumber) {
		document.getElementById("new-password").innerHTML = '<p id="new-password-id">' + 'You must enter a number of characters' + '</p>';
		setTimeout(function() {
			document.getElementById("new-password").innerHTML = '<p>' + 'New password goes here.' + '</p>';
		}, 2000);
	} else {
		document.getElementById("new-password").innerHTML = '<p id="the-new-password">' + newPassWord + '</p>';
		console.warn("The new password: ", newPassWord,".  The new password length: ", newPassWord.length);
	};
};





