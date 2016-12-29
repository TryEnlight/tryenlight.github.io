---
layout: post
title: Live HTML/CSS/JS Editor
description: an online editor that compiles your code live
category: middle-web
permalink: /code-editor
img: /img/code-editor.gif
demourl: /demo/code-editor-project/index.html
source: https://github.com/samayshamdasani/enlight/tree/gh-pages/demo/code-editor-project
---
### Getting Started

In this project, we'll be building a live code editor similar to <a href="https://codepen.io" class="underline">Codepen</a> or <a href="https://jsfiddle.net" class="underline">JsFiddle</a>.

Let's get started by creating our usual three files: 

- index.html - for our markup
- style.css - for styling
- app.js - for the function(s)

To get started with our markup, we'll be needing three <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea" class="underline">textarea</a> tags which will correspond with the id of the language we'll be compiling. To actually show the compiled code, we will also need an <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe" class="underline">iframe</a> which will allow us to insert an html document into an existing html page. Make sure to set ids for each tag so we can communicate with these elements in JavaScript.


<pre class="prettyprint"><xmp>
  <html>
    <head>
      <title>Code Editor</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <link rel="stylesheet" href="style.css">
    </head>

    <body>

      <textarea id="html" placeholder="HTML"></textarea>
      <textarea id="css" placeholder="CSS"></textarea>
      <textarea id="js" placeholder="JavaScript"></textarea>
      <iframe id="code"></iframe>

      <script type="text/javascript" src="app.js"></script>

    </body>
  </html>

</xmp></pre>

### Making it look decent

Before we head on to making our app, let's style it up a bit. We should align the elements to the center, make the textarea elements go side by side, and put the iframe right below them. 

<pre class="prettyprint">

  body {
    text-align: center;
  }

  textarea {
    width: 32%;
    float: top;
    min-height: 250px;
    overflow: scroll;
    margin: auto;
    display: inline-block;
    background: #F4F4F9;
    outline: none;
    font-family: Courier, sans-serif;
    font-size: 14px;
  }

  iframe {
    bottom: 0;
    position: relative;
    width: 100%;
    height: 35em;
  }


</pre>


As always, feel free to customize this to your liking!

### Our compile() function

Now, here's where we actually make our app functional. We can do so with just one function. Here's what we'll need to write in it:

- link the html, css, and js ids to variables using <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById" class="underline">document.getElementById()</a>
- set the iframe id's <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow" class="underline">contentWindow</a> to a variable
- write a function that runs on <a href="https://developer.mozilla.org/en-US/docs/Web/Events/keyup" class="underline">document.body.keyup</a> (when a key is pressed) that:
	- opens the textarea's contentWindow
	- writes the values of the html, css, and js variables in it
    - closes the textarea's contentWindow


<pre class="prettyprint"><xmp>
  function compile() {

    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;
    
     document.body.onkeyup = function(){
      code.open();
      code.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
      code.close();
        };
      };
      
  compile();

</xmp></pre>

<p>
That's it! Pretty simple right? To take this a step further, try and make the textareas responsive with  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries" class="underline">media queries</a>. If you liked this tutorial, try building a <a href="/web-paint.html" class="underline"> Web Paint</a> app!
