var $ = require('jquery');

function App(options) {
	$(options.root).text(options.text);

	$(options.root).css('background', options.background);
}

module.exports = App;
