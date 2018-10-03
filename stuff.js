function load(file, appendTo, callback) {
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (this.status == 200) {
				appendTo.append(this.responseText);
				callback();
			}
			if (this.status == 404) console.log("error loading \"" + file + "\"");
		}
	}
	xhttp.open("GET", file, true);
	xhttp.send();
}