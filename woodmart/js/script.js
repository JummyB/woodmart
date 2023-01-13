function toggle() {
	var x = document.getElementById("mobile-nav");
	if (x.className == "mobile-nav")
		x.className = "mobile-nav closed"
	else{
		x.className = "mobile-nav";
	}
}