function openPresent () {
	document.getElementById('wrapping').className = 'transparent';
}

(function () {
	document.getElementById('images').onclick = openPresent;
})();