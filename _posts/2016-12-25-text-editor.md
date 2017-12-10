---
layout: post
title: Text Editor
description: Build a minimal text editor that autosaves your text every second
author: <a class="link white" href="https://shamdasani.org">Samay Shamdasani</a>
category: easy-web
difficulty: beginner
permalink: /text-editor
img: /img/text-editor.gif
demourl: /demo/text-editor-project/index.html
source: https://github.com/tryenlight/enlight/tree/master/demo/text-editor-project
language: HTML/CSS/JS
color: orange

---
### Getting Started

In this tutorial, we'll make a text editor in the broswer. Using JavaScript, we can save the text automatically in a user's <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" class="underline">localStorage</a> so that whenever the text editor is pulled up, it remembers the text that was written. localStorage is a JavaScript object that let's you save data in user's browser.

As always, you'll need a folder with three files:

   - index.html - for our markup
   - style.css - for styling
   - app.js - for the function(s)

Since we're making a text-editor, our content has to be editable! Thankfully, HTML has an attribute for that. Go ahead: link the files, and create two <a href="http://www.w3schools.com/tags/tag_div.asp" class="underline">divs</a> with the <a href="http://www.w3schools.com/tags/att_global_contenteditable.asp" class="underline">contenteditable attribute </a>and with a heading and a content id.

```html  
<html>
	<head>
	  <title>Text Editor</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <link rel="stylesheet" href="style.css"/>
	</head>

		 <div id="heading" contenteditable="true"></div>
		 <div id="content" contenteditable="true"></div>

	<script src="app.js"></script>

  </html>

```
Open the html file in your bowser. You'll see that you have two editable text boxes. However, they're pretty ugly. Let's style them!

### Styling the Editor

Here's some basic things you should do in your the style.css file:

- change the <a href="http://www.w3schools.com/cssref/pr_font_font-family.asp" class="underline">font</a>
- center the text boxes and set a <a href="http://www.w3schools.com/cssref/pr_dim_max-width.asp" class="underline">max-width</a>
- remove the ugly blue outline with <a href="http://www.w3schools.com/cssref/sel_focus.asp" class="underline">div:focus</a>
- add some <a href="http://www.w3schools.com/css/css_padding.asp" class="underline">padding</a>
- adjust the <a href="http://www.w3schools.com/cssref/pr_font_font-size.asp" class="underline">font size</a>

This is my attempt. Feel free to customize your editor however you wish to!

```css
  html {
    font-family: 'Helevetica', sans-serif;
  }

  body {
    color: #333;
    font-weight: 100;
    max-width: 50em;
    margin: 0 auto;
  }

  div:focus {
    outline: none;
  }

  #heading {
    font-size: 48px;
    padding-top: 30px;
  }

  #content {
    padding-top: 10px;
    font-size: 24px;
  }
```
How does your editor look now? Play around with it! However, you may have noticed that if you refresh the page, the text doesn't save. Let's fix that.

### JavaScript and localStorage function


To save the text in our two divs, we need to store it in the brower's localStorage. To do that, we first have to get the div ids from the HTML document and set it to a localStorage instance with some default text. Then, we can write a function that checks the innerHTML of both the divs and saves it every second. Here's what we have to write:


- for both divs, we need to use <a href="http://www.w3schools.com/jsref/met_document_getelementbyid.asp" class="underline">document.getElementById().innerHTML</a> and set it to a <a  href="http://www.w3schools.com/html/html5_webstorage.asp" class="underline">localStorage[]</a> 'default text' object
- need to have an <a href="http://www.w3schools.com/jsref/met_win_setinterval.asp" class="underline">interval function</a> which has a localStorage object assigned to the document.getElementById().innerHTML for each div
- make the function run every 1000 milliseconds, or 1 second.

This is what the finished app.js should look like:

```js
  document.getElementById('heading').innerHTML = localStorage['title'] || 'Just Write'; // default text
  document.getElementById('content').innerHTML = localStorage['text'] || 'This text is automatically saved every second :) '; // default text

  setInterval(function() { // fuction that is saving the innerHTML of the div
	localStorage['title'] = document.getElementById('heading').innerHTML; // heading div
	localStorage['text'] = document.getElementById('content').innerHTML; // content div
  }, 1000);

```
