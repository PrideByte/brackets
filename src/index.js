module.exports = function check(str, bracketsConfig) {
  let lexicon = {};
	let result = new Array();
  for (let i = 0; i < bracketsConfig.length; i++) {
    lexicon[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
	
	for (let i = 0; i < str.length; i++) {
		if (lexicon[result[result.length - 1]] === str[i]) {
      result.pop();
			continue;
    }
		if (Object.keys(lexicon).includes(str[i])) {
      result.push(str[i]);
			continue;
    }
		return false;
	}
	
	return str.length > 0 && result.length === 0;
}