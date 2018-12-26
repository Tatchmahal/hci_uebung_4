function changeTheme(styleDir) {
	var theme = localStorage.getItem('theme') || 'dark';
	if (theme === "dark"){
		document.getElementById("themeBut").textContent = "Dark Theme";
		document.getElementById("theme").href = styleDir + "light-theme.css";
		localStorage.setItem('theme', "light");
	}else{
		document.getElementById("themeBut").textContent = "Light Theme";
		document.getElementById("theme").href = styleDir + "dark-theme.css";
		localStorage.setItem('theme', "dark");
	}
}

function updateTheme(styleDir) {
	var theme = localStorage.getItem('theme') || 'dark';
	if (theme === "dark"){
		document.getElementById("themeBut").textContent = "Light Theme";
		document.getElementById("theme").href = styleDir + "dark-theme.css";
	}else{
		document.getElementById("themeBut").textContent = "Dark Theme";
		document.getElementById("theme").href = styleDir + "light-theme.css";
	}
}

function test(styleDir){
	document.getElementById("theme").href = styleDir + "dark-theme.css";
}