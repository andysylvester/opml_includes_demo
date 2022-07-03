var express = require('express');
var router = express.Router();
const fs = require ("fs");
const opml = require ("opml");

var myTest = '';
var mySecondTest = '';
const ob = require("../public/javascripts/outlinebrowser.js");


/* GET home page. */
router.get('/', function(req, res, next) {

fs.readFile ("includes.opml", function (err, opmltext) {
	if (err) {
		console.log (err.message);
		}
	else {
		opml.parse (opmltext, function (err, theOutline) { //convert OPML text into a JavaScript structure
			opml.expandIncludes (theOutline, function (theNewOutline) {
                // Uncomment the following line to see the JSON object created from expanding the included OPML files
				// console.log (JSON.stringify (theNewOutline, undefined, 4));
                //
				// For each included outline, generate HTML for the text from includes.opml for the outline, then generate HTML for the outline itself 
				mySecondTest = '';
				for (var i = 0; i < theNewOutline.opml.body.subs.length; i++) {
					mySecondTest = mySecondTest + '<div class="divOutlineTitle" id="idOutlineTitle">' + theNewOutline.opml.body.subs[i].text + '</div>'
				    mySecondTest = mySecondTest + ob.renderOutlineBrowser (theNewOutline.opml.body.subs[i], false, "", "", true);
				}
                // Call the Express render function to display the included outlines
                res.render('index', { title: 'Express', test: myTest, test01: mySecondTest });
				});
			});
		}
	});

});


module.exports = router;
