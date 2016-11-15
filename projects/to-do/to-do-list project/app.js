function newItem() {
	var item = document.getElementById('input').value;
	var ul = document.getElementById("list");
	var li = document.createElement('li');
  	li.appendChild(document.createTextNode("- "+item));
  	ul.appendChild(li);
  	li.onclick = removeItem;
}


function removeItem(e) {
    e.target.parentElement.removeChild(e.target);
}


document.body.onkeyup = function(e){
      if(e.keyCode == 13){
        newItem();
      }
  }
