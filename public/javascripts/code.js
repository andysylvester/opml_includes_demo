function filledString (ch, ct) { //6/4/14 by DW
	var s = "";
	for (var i = 0; i < ct; i++) {
		s += ch;
		}
	return (s);
	}
function encodeXml (s) { //7/15/14 by DW
	//Changes
		//12/14/15; 4:28:14 PM by DW
			//Check for undefined, return empty string.
	if (s === undefined) {
		return ("");
		}
	else {
		var charMap = {
			'<': '&lt;',
			'>': '&gt;',
			'&': '&amp;',
			'"': '&'+'quot;'
			};
		s = s.toString();
		s = s.replace(/\u00A0/g, " ");
		var escaped = s.replace(/[<>&"]/g, function(ch) {
			return charMap [ch];
			});
		return escaped;
		}
	}
