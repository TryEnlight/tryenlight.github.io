function newItem() {
	var item = document.getElementById('input').value;
	var ul = document.getElementById("list");
	var li = document.createElement('li');
  	li.appendChild(document.createTextNode(item));
  	ul.appendChild(li);
}



document.body.onkeyup = function(e){
      if(e.keyCode == 13){
        newItem();
      }
  }
