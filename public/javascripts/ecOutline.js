var outlineBrowserData = {
	version: "0.5.1",
	serialNum: 0,
	flTextBasedPermalinks: true, //1/26/17 by DW
	flProcessEmoji: true, //7/3/17 by DW
	expandCollapseCallback: function (idnum) { //9/22/17 by DW
		}
	}
 
 function ecOutline (idnum) { 
	var c = document.getElementById ("idOutlineWedge" + idnum), idUL = "#idOutlineLevel" + idnum;
	if (c.className == "fa fa-caret-down") {
		c.className = "fa fa-caret-right";
		c.style.color = "black";
		$(idUL).slideUp (75);
		}
	else {
		c.className = "fa fa-caret-down";
		c.style.color = "silver";
		$(idUL).slideDown (75, undefined, function () {
			
			$(idUL).css ("display", "block");
			
			});
		}
	outlineBrowserData.expandCollapseCallback (idnum); //9/22/17 by DW
	}
