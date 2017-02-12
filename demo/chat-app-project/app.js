function chat(){
    var 1st = document.getElementById("1st");
    var 2nd = document.getElementById("2nd");
    var chat = document.getElementById("chat").contentWindow.document;
    
    document.body.onkeyup = function(){
        chat.open();
        chat.append("")
        
    };
};

chat();