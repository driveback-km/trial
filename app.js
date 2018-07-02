var express = require('express');
var app = express();
var pageviews = [];

function removeStalePageviews() {
	const now = new Date();
	while (pageviews.length > 0) {
		if (now - pageviews[0] > 60000) {
			pageviews.splice(0, 1);
		}
		else {
			break;
		}
	}
}

app.get('/', function (req, res) {
	removeStalePageviews();
	pageviews.push(new Date());
	res.send('<h2>DriveBack Trial by kmaslov</h2>Pageviews: <strong>' + pageviews.length +'</strong> per last minute');
});

app.listen(3000);