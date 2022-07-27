//  function addition (num1, num2) {
//     return num1 + num2 
// }

// console.log (addition(3, 5))

// function hoursIntoSeconds (hour) {
//     return hour * (60 * 60)
// }

// console.log (hoursIntoSeconds(24))

// function rectanglePerimeter (length, widht) {
//     return (2 * length) + (2 * widht);
// }

// console.log (rectanglePerimeter(6, 7))

// function calcTriangleArea (base, height) {
//     return 0.5 * base * height 
// }

// console.log (calcTriangleArea(10, 10))

// function appendFrontend(str) {
//     return str + 'Frontend'
// }

// console.log(appendFrontend('Apple'))

// function sumGreaterThan100(num1, num2) {
//     return num1 + num2 > 100
// }

// console.log (sumGreaterThan100(50, 49))

// function lessThanOrEqualToZero (num1) {
//     return num1 <= 0;
// }

// console.log (lessThanOrEqualToZero(1))

// function oppositeBooelan (boolean) {
//     return !boolean;
// }

// console.log (oppositeBooelan(true))

/**NOTE: IF ! IS ADDED TO A BOOLEAN IT WILL RETURN THE OPPOSITE
 * VALUE OF THE GIVEN BOOELEAN VALUE
**/

// function isNotZero (element) {
//     return element !== 0
// }

// console.log (isNotZero(5))

// function calcRemainder(num1, num2) {
//     return num1 % num2;
// }

// console.log (calcRemainder(10, 9))

// function isOdd(num1) {
//     return num1 % 2 !== 0
// }

// console.log (isOdd(121))

// function booleanInteger(num) {
//     return num % 2 === 0 ? 1 : -1;
// }

// console.log (booleanInteger(2))

/**NOTE: THE TURNERY OPERATOR "?" ONLY CHECKS IF THE VALUE IS TRUTHY AND NOT THE BOOLEAN TRUE
 * E.G num % 2 === 0 ? 1 : -1;
 * If the value of the left side is true then it return what's on the left side "1"
 * If its false then it returns what's on the right side "-1"
 * 
 * Extra Examples
 * 
 * 5 ? true: false = true
 * false ? true : flase = false
 * '' ? true : false = false
 * 0 ? true : false = false
 * 
 * It is similar to a truthy statement, it doesn't check if the variable is exactly the true variable, it just checks if it's truthy or falsy
 */

function isLoggedInAndSubscribed (str1, str2) {
    return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED'
    return str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED'
}

console.log (isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))

/**If something and something needs to happen you should straight away use &&
 * But if something is asking for "or" use ||
 * 
 * TO CLARIFY
 * IF YOU NEED TO BE LOGGED IN AND SUBSCRIBED TO ENTER USE &&
 * BUT IF YOU ONLY NEED TO BE LOGGED IN OR SUBSCRIBED TO ENTER USE ||
 */

