function hideHeader() {
	document.getElementById('post').scrollIntoView();
}

hideHeader();

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