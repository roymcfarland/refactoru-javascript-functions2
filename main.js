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

var vowels = function(string) {
	string.split('').filter(function(letter){
		if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
			return true} else {
			return false}
			}
console.log( vowels('alabama') );
console.log( vowels('What lets in youth?') );



/////////////////////////////////////
/////////// EXERCISE 8 //////////////
/////////////////////////////////////


















