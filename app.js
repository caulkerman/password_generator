"use strict";

/*This was a fun app to make and good practice for some raw javascript.  I am sure that there is so much more functionality that could be created and implemented here and maybe I will get busy doing it some other day, but at this point is it fully usable and I will leave it for now just the way it is. */
/*Known bug: When using dashes, it will often output a password with 3 repeating characters such as ICoEL-LLf or A4*:8-ttth at and around the dash. Also, when using dashes with with passwords less than 5 characters long you will often get funky results. */
console.log("WELCOME TO THE PASSWORD GENERATOR");
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
let passwordLengthP = document.querySelector("#password-length");
let pWordFlag;
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let lettersArray = ["B", "b", "C", "c", "D", "d", "F", "f", "G", "g", "H", "h", "J", "j", "K", "k", "L", "l", "M", "m", "N", "n", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "V", "v", "W", "w", "X", "x", "Z", "z"];
let vowelsArray = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u", "Y", "y"];
let specialCharactersArray = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "_", "/", ":", ";", "=", "@", "`", "~", '"', "^"];
let funcArray = [];


const checkBoxCharactersYes = () => {
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
	} else {
		checkCharactersYes = true;
		document.getElementById("checkbox-characters-yes").checked = true;
		//function call if I want user to pick specific character
		checkCharactersNo = false;
		document.getElementById("checkbox-characters-no").checked = false;
		funcArray.push(specialCharactersFunc);
	};

};

let checkBoxCharactersNo = () => {
	if (checkCharactersNo) {
		checkCharactersNo = false;
		document.getElementById("checkbox-characters-no").checked = false;
		checkCharactersYes = true;
		document.getElementById("checkbox-characters-yes").checked = true;
		//function call if I want user to pick specific character
		funcArray.push(specialCharactersFunc);
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
	};
};

const checkBoxNumbersYes = () => {
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
	} else {
		checkNumbersYes = true;
		document.getElementById("checkbox-numbers-yes").checked = true;
		checkNumbersNo = false;
		document.getElementById("checkbox-numbers-no").checked = false;
		funcArray.push(numbersFunc);
	};
};

const checkBoxNumbersNo = () => {
	if (checkNumbersNo) {
		checkNumbersNo = false;
		document.getElementById("checkbox-numbers-no").checked = false;
		checkNumbersYes = true;
		document.getElementById("checkbox-numbers-yes").checked = true;
		funcArray.push(numbersFunc);
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
	};
};

const checkBoxDashesYes = () => {
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

const checkBoxDashesNo = () => {
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


const generatePassword = () => {
	forLoopNumber = 0;
	newPassWord = "";
	inputtedNumber = document.getElementById("characterNumberId").value;
	if (inputtedNumber === "" || inputtedNumber === undefined) {
		console.error("NO inputted number entered");
		document.getElementById("new-password").innerHTML = '<p id="new-password">' + 'New password goes here.' + '</p>';
		return;
	};

	if (inputtedNumber < 1) {
		pWordFlag = true;
		lowNumber();
		return;
	};

	if (inputtedNumber > 127) {
		pWordFlag = true;
		highNumber();
		return;
	}

	console.log("the inputtedNumber: ", inputtedNumber);

	for (let i = 0; i < inputtedNumber; i++) {
		if (forLoopNumber <= inputtedNumber &&  newPassWord.length <= inputtedNumber) {
			let randomNumber = Math.floor(Math.random() * funcArray.length);
			funcArray[randomNumber]();
		};
		forLoopNumber += 1;
	};

	//Sometimes at the end of the five characters and next the dash an extra character is automatically added and I can't figure out the reason, but it never exceeds 1 character and it doesn't always happen. So, if it does, this if conditional is here to pop off the last unwanted character/s if it so happens.
	if (newPassWord.length > inputtedNumber) {
		let diffNum = newPassWord.length - inputtedNumber;
		// console.log("newPassWord before it gets split, popped, and joined: ", newPassWord, newPassWord.length);
		for (let i = 0; i < diffNum; i++) {
			var splitted = newPassWord.split("");
			splitted.pop();
			newPassWord = splitted.join("");
			if (newPassWord.length === inputtedNumber) {
				break;//this might not be needed
			};
		};
		// console.warn("newPassWord after it gets split, popped, and joined: ", newPassWord);
	};
	//The below "if" statement is needed because when the add dashes option is checked and any and all of the other options are checked and the password is less than 5 characters the new password is often less than the desired amount of characters long. This "if" statement calls the the generatePassword function again and it cycles through until we have the correct amount of characters in the new password if it is less than 5 characters.
	if (newPassWord.length < inputtedNumber) {
		generatePassword();
		console.error("Had to re-run the function");
	};
	noInputWarning();
};



const lettersFunc = () => {
	if (newPassWord.length < inputtedNumber) {
		let randomNumber = Math.floor(Math.random() * lettersArray.length);
		let randomLetter = lettersArray[randomNumber];
		if (!checkDashesYes) {
			newPassWord += randomLetter;
		} else if (checkDashesYes && inputtedNumber - newPassWord.length < 5) {
			newPassWord += randomLetter;
			dashesFunc();
		} else {
			if (checkDashesYes) {
				tempNewPassWord += randomLetter;
				dashesFunc();
			};
		};
		if (inputtedNumber - newPassWord.length > 1) {
			for (let i = 0; i < 2; i++) {
				let randomNumber = Math.floor(Math.random() * vowelsArray.length);
				let randomVowel = vowelsArray[randomNumber];
				let splitNewPassword = newPassWord.split("");
				if (splitNewPassword[splitNewPassword.length -1] === "y" || splitNewPassword[splitNewPassword.length -1 === "Y"]) {
						break;
				};
				if (!checkDashesYes) {
					newPassWord += randomVowel;
				} else if (checkDashesYes && inputtedNumber - newPassWord.length < 5) {
					// debugger;
					newPassWord += randomVowel;
					dashesFunc();
				} else {
					if (checkDashesYes) {
					tempNewPassWord += randomVowel;
					dashesFunc();
					};
				};	
			};
		} else { //this makes sure if there is only room for one more letter that only one more will be used.
			if (inputtedNumber - newPassWord.length === 1) {
				let randomNumber = Math.floor(Math.random() * vowelsArray.length);
				let randomVowel = vowelsArray[randomNumber];
				if (checkDashesYes) {
					tempNewPassWord += randomVowel;
				} else {
					newPassWord += randomVowel;
				};
			};
		};
	};
};
funcArray.push(lettersFunc);



const numbersFunc = () => {
	if (checkNumbersYes && newPassWord.length < inputtedNumber) {
		let randomNumber = Math.floor(Math.random() * numbersArray.length);
		let randomArrayNumber = numbersArray[randomNumber];
		if (checkDashesYes) {
			tempNewPassWord += randomArrayNumber;
			dashesFunc();
		} else {
			newPassWord += randomArrayNumber;
		};
	};
};



const dashesFunc = () => {

	if (tempNewPassWord.length >= 5) {//I use the >= so the tempNewPassword does not exceed a length of 5.  Using just === allows the newTempPassword to exceed a length of 5 and won't allow dashes to insert anymore, the tempNewPassword isn't allowed to reset, 
		newPassWord += tempNewPassWord;
		tempNewPassWord = "";
		if (newPassWord.length < inputtedNumber) {
			newPassWord += "-";
		};
	};
};



const specialCharactersFunc = () => {
	if (checkCharactersYes && newPassWord.length < inputtedNumber) {
		let randomNumber = Math.floor(Math.random() * specialCharactersArray.length);
		let randomCharacter = specialCharactersArray[randomNumber];
		if (checkDashesYes) {
			tempNewPassWord += randomCharacter;
			dashesFunc();
		} else {
			newPassWord += randomCharacter;
		};
	};
};





const noInputWarning = () => {
	// document.getElementById("characterNumberId").value = "";
	if (!inputtedNumber) {
		document.getElementById("new-password").innerHTML = '<p id="new-password-id">' + 'You must enter a number of characters' + '</p>';
		setTimeout(function() {
			document.getElementById("new-password").innerHTML = '<p>' + 'New password goes here.' + '</p>';
		}, 2000);
	} else {
		console.warn("The new password: ", newPassWord,  "The new password length: ", newPassWord.length);
		document.getElementById("new-password").innerHTML = '<p id="the-new-password">' + newPassWord + '</p>';
		if (pWordFlag === false || pWordFlag === undefined) {
			document.getElementById("password-length").innerHTML = '<p id="password-length">' + 'New Password Length: ' + newPassWord.length + '</p>';
			passwordLengthP.style.visibility = "visible";
		};
	};
};

const lowNumber = () => {
	document.getElementById("characterNumberId").value = "";
	document.getElementById("new-password").innerHTML = '<p id="new-password">' + 'New password goes here.' + '</p>';
	document.getElementById("input-div").innerHTML = '<p id="bad-number">' + 'You must enter a number greater than 0' + '</p>';
	if (pWordFlag) {
		passwordLengthP.style.visibility = "hidden";
	}
	setTimeout(function() {
		document.getElementById("input-div").innerHTML = '<input id="characterNumberId" type="number" autofocus>';
	}, 2000);
	pWordFlag = false;
};

const highNumber = () => {
	document.getElementById("characterNumberId").value = "";
	document.getElementById("new-password").innerHTML = '<p id="new-password">' + 'New password goes here.' + '</p>';
	document.getElementById("input-div").innerHTML = '<p id="bad-number">' + 'You must enter a number less than 128' + '</p>';
	passwordLengthP.style.visibility = "hidden";
	setTimeout(function() {
		document.getElementById("input-div").innerHTML = '<input id="characterNumberId" type="number" autofocus>';
	}, 2000);
	pWordFlag = false;

};




