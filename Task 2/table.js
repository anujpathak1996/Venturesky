var btn = document.querySelector("button");
btn.addEventListener("click" , function(){
	var table = document.getElementById("my_table");
	var new_row = table.insertRow("1");
	var col_one = new_row.insertCell("0");
	var col_two = new_row.insertCell("1");
	var col_three = new_row.insertCell("2");
	col_two.innerHTML = "Welcome";
	col_three.innerHTML = "<h1>New Row</h1>";
	col_one.innerHTML = "<input></input>";
	col_one.style.paddingLeft="20px";
});