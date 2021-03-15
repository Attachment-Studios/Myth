console.log("Please Don't Hack Or Whack! 😄😄😀😀🙂🙂");
console.log("This site is under Attachment Studios!");

document.oncontextmenu = rightClick;

function rightClick(clickEvent) {
	clickEvent.preventDefault();
}

function removeAllDownloads() {
	document.getElementById("0.1.2").style.display = "none";
}

function filter() {
	removeAllDownloads();
	var version = document.getElementById("version").value;
	document.getElementById(version).style.display = "inline-flex";
	document.getElementById(version).style.background = "transparent";
	document.getElementById(version).style.animation = "none";
}

function downloading(id) {
	var downloadName = "Myth";
	if (id == "dwnld-py") {
		downloadName = "Python File + Set-Up Environment For Myth."
	} else if (id == "dwnld-sc") {
		downloadName = "Source Code + Set-Up Environment For Myth"
	} else if (id == "dwnld-pc") {
		downloadName = "Myth Executable"
	} else if (id == "dwnld-mp") {
		downloadName = "Myth Android Application(APK)"
	} else if (id == "dwnld-iP") {
		downloadName = "Myth iPhone Application(IPA)"
	} else if (id == "dwnld-mo") {
		downloadName = "Myth MacOS Application"
	} else if (id == "dwnld-ln") {
		downloadName = "Myth Linux Application"
	}
	alert("Downloding " + downloadName + "\nDownload will be ready soon...");
	document.getElementById(id).innerHTML = "Downloding..."
}
