// Toggle visibility of headings
function toggle_visibility(id) {
	var e = document.getElementById(id);
	if(e.style.display == 'block')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}

function visible(id) {
	var c = document.getElementById(id);
	c.style.display = 'block';
}

function shrink_menu_panel(id){
	var header = document.getElementById(id);
	// if(header.style.width == '270px')
	// 	header.style.width == '70px';
	// else
		header.style.width == "70px";
}

// Row highlight in table
window.onload=function(){
	var tfrow = document.getElementById('tfhover').rows.length;
	var tbRow=[];
	for (var i=1;i<tfrow;i++) {
		tbRow[i]=document.getElementById('tfhover').rows[i];
		tbRow[i].onmouseover = function(){
			this.style.backgroundColor = '#f3f8aa';
		};
		tbRow[i].onmouseout = function() {
			this.style.backgroundColor = '#ffffff';
		};
	}
};

function showOverlay() {
	var o = document.getElementById('overlay');
	o.style.visibility = 'visible';
	var p = document.getElementById('overlay-pass');
	p.style.visibility = 'visible';
	document.getElementById("myField").focus();
}
function hideOverlay() {
	var o = document.getElementById('overlay');
	o.style.visibility = 'hidden';
	var p = document.getElementById('overlay-pass');
	p.style.visibility = 'hidden';
}
