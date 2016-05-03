var fortuneCookies = ["Conquer", "Rivers", "Fears", "Surprise", "Simple"];

exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
}