var ar1 = Array(4);
ar1 [0] = "jay";
ar1 [1] = "kr";
ar1 [2] = "maa";
ar1 [3] = "Su";
ar1 [4] = "ku";

function displayArray() {
	var n = ar1.length;
	var resultDiv = document.getElementById("resultDiv");

	for (var i=0; i<n; i++) {
		var newDiv = document.createElement ("div");
		newDiv.innerHTML = "Array one" + (i).toString() + "of" + n.toString() + " is " + ar1[i];
		resultDiv.appendChild(newDiv);
	}
}