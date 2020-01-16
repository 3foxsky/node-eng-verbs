var englishVerbs = require('./english_verbs.json');

function getVerb(verb) {
	if (verb === '') {
		return Error('No base form verb provided.');
	};
	return englishVerbs.filter(function(verbItem) {
		return verbItem.BF === verb;
	});
}

module.exports = getVerb;
