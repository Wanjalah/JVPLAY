function isEven(num) {
  // Check if the num is divisible by 2
  return num % 2 === 0;
}
// Test cases
console.log(isEven(4)); // Expected output: true
console.log(isEven(7)); // Expected output: false
console.log(isEven(-2)); // Expected output: true


//REVERSESTRING
function reverseString (str) {
  //split the string into an array of characters
  let charArray = str.split('');
  // reverse the array 
  let reversedArray = charArray.reverse('');
  //Join the characters back into the String
  let reversedString = reversedArray.join('');
  // Return the reversed string
  return reversedString;
}
//Test cases
console.log(reverseString('hello'));
//Expected output: 'olleh'
console.log(reverseString('12345'));
//Expected output: '54321'

