function letterCombinations(input_digit) {
  //Complete the function
	const keys = {
		1: "1",
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
		0: "0"
	}
	for(key in keys){
		console.log(keys[key]);
	}
}

module.exports = letterCombinations;
