function newItem() {
	var item = document.getElementById('input').value;
	var ul = document.getElementById("list");
	var li = document.createElement('li');
  	li.appendChild(document.createTextNode(item));
  	ul.appendChild(li);
}

window.onload = function removeItem() {
	var ul = document.getElementById("list");
	var li = getElementsByTagName('li');
	li.parentNode.removeChild(item); 
	ul.removeChild(li);
}

document.body.onkeyup = function(e){
      if(e.keyCode == 13){
        newItem();
      }
  }
