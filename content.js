// alert("Unrelated");
for (var i = 10 - 1; i >= 0; i--) {
	setTimeout(function() {
		var rel = document.getElementById("related");
		rel.style.visibility = "hidden";
	}, 1000);
}

