// JavaScript Document	
function displaytime() {
	var elt = document.getElementById("clock");
	var now = new Date();
	elt.innerHTML = now.toLocaleTimeString();
	setTimeout(displaytime, 1000);

}

function factorial(n) {
	if (n <= 1) return n;
	else return n * factorial(n - 1);
}
document.write("<table>");
document.write("<tr><th>n</th><th>n!</th></tr>");
for (var i = 1; i <= 5; i++) {
	document.write("<tr><td>" + i + "</td><td>" + factorial(i) + "</td></tr>");
}
document.write("</table>");
document.write("Generated at " + new Date);

function displayDate() {
	document.getElementById("demo").innerHTML = Date();
}

function showsize() {

	var w = window.innerWidth ||
		document.documentElement.clientWidth ||
		document.body.clientWidth;
	var h = window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
	x = document.getElementById("demo1");
	x.innerHTML = "浏览器window宽度: " + w + ", 高度: " + h + "。"

}

function showuser() {
	txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
	txt += "<p>浏览器名称: " + navigator.appName + "</p>";
	txt += "<p>浏览器版本: " + navigator.appVersion + "</p>";
	txt += "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
	txt += "<p>硬件平台: " + navigator.platform + "</p>";
	txt += "<p>用户代理: " + navigator.userAgent + "</p>";
	txt += "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
	document.getElementById("userid").innerHTML = txt;
}


window.onload = displaytime;
