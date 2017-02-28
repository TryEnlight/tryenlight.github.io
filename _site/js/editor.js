function compile() {

	var html = document.getElementById("html");
	var css = document.getElementById("css");
	var js = document.getElementById("js");
	var code = document.getElementById('code-iframe').contentWindow.document;
	
	document.body.onkeyup = function(){
	   code.open();
	   code.writeln(html.value+"<style>"+css.value+"</style><script>"+js.value+"</script>");
	   code.close();
     }
};

compile();


function exitEditorView() {
	document.getElementById("editor").outerHTML="";;  
	document.getElementById("project-editor").removeAttribute('class');  
	document.getElementById("project-editor").setAttribute('class', 'content-exit');  

}

