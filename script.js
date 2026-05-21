var form = document.getElementById("frm");
form.onsubmit = function () {
	var u_input = document.getElementById("u_num").value;
	var result = document.getElementById("result");
	var i;
	for (i = 1; i <= u_input; i++) {

		if (i % 2 == 0) {
			result.innerHTML += i + "<br>";
		}

	}
	return false;
}

var clearBtn = document.getElementById("clear");
clearBtn.onclick = function () {
	document.getElementById("u_num").value = "";
	document.getElementById("result").innerHTML = "Result will appear here.<br>";
}