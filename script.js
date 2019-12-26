let listContainer = document.getElementById("list-container");
let input = document.getElementById("task");
let type = document.getElementById("mySelect");
let clearBtn = document.getElementById("clearBtn");
let body = document.getElementsByTagName("body")[0];

body.addEventListener("keydown", function(event){
	if(event.keyCode == 13){
		addTask();
	}
	if(event.keyCode == 27){
		clearBtn.click();
	}
});

function addTask() {
	let text = input.value.trim();
	if(text == ""){
		return;
	}
	let item = buildItem(text);
	listContainer.append(item);
	input.value = "";
	input.focus();
	addAction(item);
	setColor(item);

}

function deleteAll(){
	if(listContainer.childNodes.length != 0 && confirm("Are youy sure?")){
	for (let i = listContainer.childNodes.length - 1; i >= 0 ; i--) {
			listContainer.childNodes[i].remove();
	}
	}
	
}

function setColor(item) {
	// switch(mySelect.value) {
	//   case "home":
	// 		item.style.color = "blue";
	// 	    break;
	//   case "study":
	// 		item.style.color = "green";
	// 	    break;
	//    case "job":
	//    		item.style.color = "pink";
	//    		break;
	//   default:
	//   		item.style.color = "black";
	    
	// }
	colors = {
		"home": "blue",
		"study": "green",
		"job": "pink"
	}

	item.childNodes[1].style.color = colors[mySelect.value]
}

function addAction(item) {
	let checkbox = item.childNodes[0];
	let text = item.childNodes[1];
	let close = item.childNodes[2];

	close.addEventListener("click", function () {
		item.remove();
	})

	checkbox.addEventListener("click", function () {
		if(checkbox.checked ===false){
			text.style.textDecoration = "";
		}else text.style.textDecoration = "line-through";

		
	})

}

function buildItem(text) {
	let box = document.createElement("li");
	let checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	let item = document.createElement("span");
	item.innerHTML = text;
	let close = document.createElement("span");
	close.className = "close";
	close.innerHTML = "X";

	box.append(checkbox);
	box.append(item);
	box.append(close);

	return box;
}