---
layout: post
title: Hex Color Generator
description: Build a generate beautiful colors every time you press the spacebar
author: <a class="link white" href="https://shamdasani.org">Samay Shamdasani</a>
category: easy-web
difficulty: beginner
permalink: /hex-color-generator
img: /img/color.gif
img-front: /img/color.gif
demourl: /demo/color-project/index.html
source: https://github.com/shamdasani/enlight/tree/gh-pages/demo/color-project
language: HTML/CSS/JS
color: navy

---
### Getting Started

In this tutorial, we'll make our very own color generator with just a couple lines of JavaScript. First off, you'll need a folder with three files:

- index.html - for our markup
- style.css - for styling
- app.js - for the function(s)

Before we begin, we have to link all our files all together. Open up your index.html file in your favorite text editor and add a title, a viewport, and link all our files together. Our index.html file should look something like this:

<pre class="prettyprint">
<xmp>
    <html>
    <head>
        <meta charset="utf-8">
        <title>
            Hex Color Generator
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="style.css" />
    </head>
	    <div id="hex"></div>
	    <script src ="app.js"></script>
    </html></xmp>
  </pre>   


 Seems new? Don't worry! 

 The !DOCTYPE html tag tells the web broswer what version of HTML the page is written in.
 Right below that, we have our head tag, where we can add our title, meta, and link up our CSS file.
 The viewport is used to make the page responsive so that any device can view the content clearly by based on 
 the size of the screen so that browser can scale accordingly. Lastly, we have to link our JavaScript file which 
 will contain our function of generating the random color. 

### The function

 If you are somewhat familiar with CSS, you know that colors are either specified in a rgb or hex code format. An example of this 
  would be #ffffff (white) or #000000 (black). To generate our number, JavaScript has a math.random function that returns, random numbers that are between 0 and 1. 

  For example, let's start by printing a simple math.random function: 

<pre class="prettyprint">

  function getColor() {
	return '#' + Math.random()
  }
		  
  document.write(getColor());


</pre>

  If you take a look at the result by opening up our html file, we get a random number between 0 and 1 with a (#) added in front of it. However, since hex numbers include six letters (A, B, C, D, E, & F), we need to add those letters into our result as well. In addition, we also need to get rid of the (0) and (.) and limit the result to only 6 characters.
  Go ahead and try to solve this yourself. Here's a hint: you'll need to expand the math.random function by using Javascript's <a href="http://www.w3schools.com/jsref/jsref_tostring_number.asp" class="underline">toString()</a> and <a href="http://www.w3schools.com/jsref/jsref_slice_string.asp" class="underline">slice()</a> methods.

  Seriously, don't move on! Read up on those methods!

  Alright, let's see what you've come up with. Using the toString() method, we can convert our number to a string with a hexadecimal value. We can get a hexadecimal value by adding .toString(16) to the end of our math.random function. Let's check out our result: 

<pre class="prettyprint">

  function getColor() {
     return '#' + Math.random().toString(16)
  }
  
  document.write(getColor());  


</pre>


Now we have a number in hexadecimal format, but it isn't ready yet! We still have to get rid of the (0) and (.) and limit our result to 6 characters! We can to that with the JavaScript slice() method by adding .slice(2,8) at the end of our math.random function. 
The reason we have 2 and 8 in the parenthesis is because we want to slice the result starting with the first two characters and ending at the eigth charcter to get six charcters in total. Check out the result!

<pre class="prettyprint">

  function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }
  
  document.write(getColor()); 


</pre>
 
 Finally, we have a number we can work with! All we need to do is set this hex value
 as our background. We can do that by writing another function, and that function will do two things:
    
 - set getColor() to a <a href="http://www.w3schools.com/js/js_variables.asp" class="underline">variable</a>
 - set the <a href="http://www.w3schools.com/jsref/prop_style_background.asp" class ="underline">document.body.style.background</a> equal to that variable
    

 Go ahead, you should be able to do this one!

 Here's what your app.js code should look like: 

<pre class="prettyprint">

  function getColor() {
	return '#' + Math.random().toString(16).slice(2, 8);
  }
		  
  function setBackground() {
	var bgColor = getColor();
	document.body.style.background = bgColor;
  }
  setBackground()


</pre>
   
If we open our html file in the browser, you should see a random color every time you refresh the page!

### Making the Spacebar Work

 Now, nobody wants to keep refreshing! We want to generate a new color every time someone clicks the space bar. We can do that by editing
 the setBackground() function at the end. Instead of just running it, we have to tell the browser <i>when</i> to run it. 

  We can do this by using an <a href="http://www.w3schools.com/js/js_if_else.asp" class="underline">if statement </a> that runs the setBackground() function only when the keyCode of 32 (code for spacebar) is pressed. This is what we have to write:

 
  -  <a href="http://www.w3schools.com/jsref/event_onkeyup.asp" class="underline"> document.body.keyup</a> should be equal to a function (a variable)
  - in that function, there must be an if statement stating if the (that variable).keyCode == 32, setBackground() should run



  This is what our finished app.js file should look like:

<pre class="prettyprint">

  // generator function
	function getColor() {
	    return '#' + Math.random().toString(16).slice(2, 8);
	}
  // sets background color style
	function setBackground() {
	  var bgColor = getColor();
	  document.body.style.background = bgColor;
	}
  // runs function on click
	 document.body.onkeyup = function(e){
	      if(e.keyCode == 32){
	        setBackground();
	      }
	  }

	  
</pre>


  Open up your html file in the browser or click on the result tab. Then, press the spacebar. Pretty neat, right?

### A little transition

But wait! We haven't even touched our style.css file! Open it up! We'll add a transition just so it looks a little more fluid when switching between colors.

<pre class="prettyprint">
  body {
    transition: all .5s ease;
   }
</pre>

Open up your html file and take a look at your latest creation!

I hope you've generated some pretty unique colors and learned a ton! However, don't stop here! Think about what you can add next! Can you print the hex color code on screen? Can you look up some additional styles to add? Can you add a "press the spacebar" message that appears until the user presses the spacebar? 

If you enjoyed this tutorial, go ahead and learn to make something else like a <a href="text-editor" class="underline">text-editor</a>!






