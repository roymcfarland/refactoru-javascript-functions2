/////////////////////////////////////
/////////// EXERCISE 1 //////////////
/////////////////////////////////////

// var getName = function(obj){
// 	return obj.name;
// };
// console.log( getName({ name: 'Luisa', age: 25 })) ;

// var getName = function(obj){
// 	return obj['name'];
// };
// console.log( getName({ name: 'Luisa', age: 25 })) ;

/////////////////////////////////////
/////////// EXERCISE 2 //////////////
/////////////////////////////////////

// var totalLetters = function(array) {
// 	return array.join('').length;
// };
// console.log( totalLetters(['javascript', 'is', 'awesome'] ));
// console.log( totalLetters(['what', 'happened', 'to', 'my', 'function']) );



/////////////////////////////////////
/////////// EXERCISE 3 //////////////
/////////////////////////////////////

// var keyValue = function(key, value) {
// 	var obj = {};
// 	obj[key] = value;
// 	return obj;
// };
// console.log( keyValue('city', 'denver') );



/////////////////////////////////////
/////////// EXERCISE 4 //////////////
/////////////////////////////////////

// var negativeIndex = function(array, num) {
// 	var newIndex = (num * -1) - 1;
// 	var newArray = array.reverse();
// 	return newArray[newIndex];
// };
// console.log( negativeIndex(['a', 'b', 'c', 'd', 'e'], -2) );
// console.log( negativeIndex(['jerry', 'sarah', 'sally'], -1) );



/////////////////////////////////////
/////////// EXERCISE 5 //////////////
/////////////////////////////////////

// var removeM = function(word) {
// 	return word.replace('m', '');
// };
// console.log( removeM('family') );
// console.log( removeM('memory') );



/////////////////////////////////////
/////////// EXERCISE 6 //////////////
/////////////////////////////////////

// var printObject = function(obj) {
// 	for (var key in obj) {
// 		console.log(key + ' is ' + obj[key]);
// 	}
// };
// printObject({ a: 10, b: 20, c: 30 });
// printObject({ firstName: 'pork', lastName: 'chops' });



/////////////////////////////////////
/////////// EXERCISE 7 //////////////
/////////////////////////////////////

// var vowels = function(string) {
// 	var newArray = [];
// 	var splitString = string.split('');
// 	for (var i=0; i<splitString.length; i++) {
// 		if (splitString[i] === 'a' || splitString[i] ===  'e' || splitString[i] ===  'i' || splitString[i] ===  'o' || splitString[i] ===  'u') {
// 			newArray.push(splitString[i]);
// 		}
// 	}
// 	return newArray;
// };
// console.log( vowels('alabama') );
// console.log( vowels('What lets in youth?') );



/////////////////////////////////////
/////////// EXERCISE 8 //////////////
/////////////////////////////////////

// var twins = function(arr) {
// 	for (var i=0; i<arr.length; i+=2) {
// 		if (arr[i] !== arr[i+1]) {
// 			return 'false';
// 		}
// 	};
// 	return 'true';
// };
// console.log( twins(['a', 'a', 'b', 'b', 'c', 'c']) );
// console.log( twins(['a', 'a', 'b', 'z']) );
// console.log( twins(['a', 'a', 'b']) );
// console.log( twins(['a', 'a', 'b', undefined]) );



/////////////////////////////////////
/////////// EXERCISE 9 //////////////
/////////////////////////////////////

// var or = function(arr) {
// 	for (var i=0; i<arr.length; i++) {
// 		if (arr[i] === true) {
// 			return true;
// 		} else if (arr[i] === undefined) {
// 			return false;
// 		}
// 	};
// 	return false;
// };
// console.log( or([false, false, true, false]) );
// console.log( or([false, false, false]) );
// console.log( or([]) );



/////////////////////////////////////
/////////// EXERCISE 10 //////////////
/////////////////////////////////////

var unique = function(arr) {
	var newArr = [];
	for (var i=0; i<arr.length; i++) {
		if (newArr.indexOf(arr[i]) === -1) {
			newArr.push(arr[i]);
		};
	};
	return newArr;
};
console.log( unique(['a', 'b', 'a', 'c', 'd', 'd']) );
console.log( unique(['todd', 'avery', 'maria', 'avery']) );
