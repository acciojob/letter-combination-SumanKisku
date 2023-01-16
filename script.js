const keys = [
	"0",
	"1",
	"abc",
	"def",
	"ghi",
	"jkl",
	"mno",
	"pqrs",
	"tuv",
	"wxyz",
]
function letterCombinations(input_digit) {
  //Complete the function
  if(input_digit.length == 0) {
	let bres = [];
	bres.push("");
	return bres;
  }

	// 578
	let ch = input_digit.slice(0,1); // 5
	let ros = input_digit.slice(1); // 78

	let rres = letterCombinations(ros);
	let mres = [];

	for(let i = 0; i < keys[ch].length; i++) {
		let char = keys[ch][i];
		for(rstr of rres) {
			mres.push(char + rstr);
		}
	}

	return mres;
	
}
// console.log(letterCombinations("203"));
module.exports = letterCombinations;
