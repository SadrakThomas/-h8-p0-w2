function numberCompare(num1, num2) {
  if (num2 > num1) {
  	return true;
  }else if (num1 === num2){
  	return -1;
  }else {
  	return false;
  }
}

// TEST CASES
console.log(numberCompare(5, 8)); // true
console.log(numberCompare(5, 3)); // false
console.log(numberCompare(4, 4)); // -1
console.log(numberCompare(3, 3)); // -1
console.log(numberCompare(17, 2)); // false

