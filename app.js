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
		// console.log("checkCharactersYes value: ", checkCharactersYes);
		// console.log("checkCharactersNo value: ", checkCharactersNo);

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
	// console.log("checkCharactersNo value: ", checkCharactersNo);
	// console.log("checkCharactersYes value: ", checkCharactersYes);
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
	// console.log("checkNumbersYes value: ", checkNumbersYes);
	// console.log("checkNumbersNo value: ", checkNumbersNo);
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
	// console.log("checkNumbersNo value: ", checkNumbersNo);
	// console.log("checkNumbersYes value: ", checkNumbersYes);
};

function checkBoxDashesYes() {
	if (checkDashesYes) {
		checkDashesYes = false;
		document.getElementById("checkbox-dashes-yes").checked = false;
		checkDashesNo = true;
		document.getElementById("checkbox-dashes-no").checked = true;
		// for (let i = 0; i < funcArray.length; i++) {
		// 	if (funcArray[i] === dashesFunc) {
		// 		funcArray.splice([i], 1);
		// 		break;
		// 	};
		// };
		// console.log("funcArray: ", funcArray);
	} else {
		checkDashesYes = true;
		document.getElementById("dashes").innerHTML = '<p class="dashes">' + 'Dashes will be every five characters' + '</p>';
		document.getElementById("checkbox-dashes-yes").checked = true;
			setTimeout(function() {
				document.getElementById("dashes").innerHTML = "Do you want to have dashes?";
			}, 2500);
		checkDashesNo = false;
		document.getElementById("checkbox-dashes-no").checked = false;
		// funcArray.push(dashesFunc);
		// console.log("funcArray: ", funcArray);
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
		// funcArray.push(dashesFunc);
		// console.log("funcArray: ", funcArray);
	} else {
		checkDashesNo = true;
		document.getElementById("checkbox-dashes-no").checked = true;
		checkDashesYes = false;
		document.getElementById("checkbox-dashes-yes").checked = false;
	// 	for (let i = 0; i < funcArray.length; i++) {
	// 		if (funcArray[i] === dashesFunc) {
	// 			funcArray.splice([i], 1);
	// 			break;
	// 		};
	// 	};
	// 	console.log("funcArray: ", funcArray);
	};
	// console.log("checkDashesNo value: ", checkDashesNo);
	// console.log("checkDashesYes value: ", checkDashesYes);
};


function generatePassword(characterNumberId) {
	forLoopNumber = 0;
	newPassWord = "";
	characterNumber = document.getElementById(characterNumberId).value;

	for (var i = 0; i < characterNumber; i++) {
		forLoopNumber += 1;
		// console.log("the forLoopNumber: ", forLoopNumber);

		if (forLoopNumber <= characterNumber &&  newPassWord.length <= characterNumber) {
			
			let randomNumber = Math.floor(Math.random() * funcArray.length);
			funcArray[randomNumber]();
			dashesFunc();
		};
	};
	document.getElementById("characterNumberId").value = "";
	document.getElementById("new-password").innerHTML = newPassWord;
	console.warn("In the BIG function the new password: ", newPassWord, newPassWord.length);
};



let lettersFunc = function() {
	if (newPassWord.length < characterNumber) {
		let randomNumber = Math.floor(Math.random() * lettersArray.length);
		let randomLetter = lettersArray[randomNumber];
		// console.log("random letter: ", randomLetter);
		newPassWord += randomLetter;
		//need to loop through the vowels array and if() it is less than characterNumber run the loop how many times the randomizer that I still need to create tells me to.  if() the randomized number is 1 have it randomize again, and if it is 2 finish the loop and the whole function.
			//loop through do some randomizing with the vowelsArray
		//}
		//if ()
	};
};
funcArray.push(lettersFunc);
console.log(funcArray);


let numbersFunc = function() {
	if (checkNumbersYes && newPassWord.length < characterNumber) {
		let randomNumber = Math.floor(Math.random() * numbersArray.length);
		let randomArrayNumber = numbersArray[randomNumber];
			// console.log("random array number: ", randomArrayNumber);
		newPassWord += randomArrayNumber;
	};
};

let dashesFunc = function() {
	let modulusNumber = forLoopNumber % 5;
	if (checkDashesYes && modulusNumber === 0 && newPassWord.length < characterNumber) {
	newPassWord += "-";
	};
	console.log("the forLoopNumber: ", forLoopNumber);
};

let specialCharactersFunc = function() {
	if (checkCharactersYes && newPassWord.length < characterNumber) {
		let randomNumber = Math.floor(Math.random() * specialCharactersArray.length);
		let randomCharacter = specialCharactersArray[randomNumber];
		newPassWord += randomCharacter;
	};
};




