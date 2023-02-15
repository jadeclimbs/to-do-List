var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



function inputLength() {
	return input.value.length;
 }


function createListElement() {
	var li = document.createElement("li");
	li.classList.add("task");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", strike);
	ul.appendChild(li);
	input.value = ""; 

  //Delete Button 
	var btn = document.createElement("button");
	var txt = document.createTextNode("delete");
	btn.appendChild(txt);
	btn.classList.add("btnD");
	btn.addEventListener("click", delItem);
	li.appendChild(btn);

	function strike() {
		li.classList.toggle("done");
	  };
	  
	function delItem() {
		li.remove("li");  
	
	}
	
}



function AddListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		
		
	}
	
}

function AddListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13 ){
		createListElement();
	}
}



button.addEventListener("click", AddListAfterClick);
input.addEventListener("keypress", AddListAfterKeypress); 