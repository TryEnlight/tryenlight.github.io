---
layout: post
title: Build a Quote Generator
description: Build a website that presents a random quote for your inspiration
author: <a class="link white" href="https://ichauster.github.io/">Ivan Chau</a>
category: middle-web
difficulty: intermediate
permalink: /quote
img: /img/quote.gif
demourl: /demo/quote-project/index.html
source: https://github.com/tryenlight/enlight/tree/master/demo/quote-project
language: HTML/CSS/JS
color: maroon

---
### Getting Started

In this tutorial, we'll use some simple JQuery connected with a <a href = "https://quotesondesign.com/api-v4-0/">Quote API </a> to make a website present a quote after the spacebar is pressed. We will be using AJAX to service requests between the API and handling the JSONP response.

 As always, you'll need a folder with three files:

- index.html - for our markup
- style.css - for styling
- app.js - for the function(s), API


To start with, our content will be displayed in the center of the screen. We also want to display our quote and source/author separately. Create a parent container <a href="http://www.w3schools.com/tags/tag_div.asp">div</a> and two other divs for the quote and source. Last, create some instructions at the tails of the site so people know how to use it, import JQuery scripts using CDN, and link a custom font for us to use from Google Fonts. Our website isn't functional and it's pretty sketchy right now so let's use some CSS to alleviate parts of those problems.


```html
<html>
  <head>
      <meta charset="utf-8">
      <title>
          Quote
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="style.css">
      <link href="https://fonts.googleapis.com/css?family=Inconsolata" rel="stylesheet">
  </head>
  <body>
    <div class="contain">
      <div class="executed" id="quote">
      </div>
      <div id="writer">
      </div>
      <div class="bottom">
        <h2> press space to inspire </h2>
      </div>
    </div>
  </body>

  <script src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous"></script>
  <script src="app.js"></script>

  </html>
```
The divs are empty, so you won't see them. However, they still are there, but all you should see as a result is the instructions to press the space we typed earlier.
### Styling the app

  Here's some basic things you should style:

- change the <a href="http://www.w3schools.com/cssref/pr_font_font-family.asp" class="underline">font</a>
- use the the CSS table display and table-cell to center.
- add some <a href="http://www.w3schools.com/css/css_padding.asp" class="underline">padding</a>
- adjust the <a href="http://www.w3schools.com/cssref/pr_font_font-size.asp" class="underline">font size</a>
- set a 'before' and 'after' stage for your quote and source - that means CSS transitions using opacity, color, position, etc.

This is my approach, feel free to tweak it to your preferences.

```css
  html,body {
    height: 100%;
    width: 100%;
    background: #202020;
    display:table;
    overflow: hidden;
  }

  /* font css */
  p {
    font-size:2em;
  }

  /* main container css */
  .contain{
    display:table-cell;
    vertical-align: middle;
    text-align: center;
    padding:3em;
  }

  /* quote css */
  #quote{
    color:white;
    font-family : Inconsolata;
    position: relative;
  }

  /* source css */
  #writer{
    opacity:1;
    font-size: 1em;
    padding-right:2em;
    text-align: right;
    color:white;
    font-family : Inconsolata;
    position: relative;
    -webkit-transition: all 1s ease-in-out;
      -moz-transition: all 1s ease-in-out;
      -o-transition: all 1s ease-in-out;
      transition: all 1s ease-in-out;
  }

  /* for the after stage of the source */
  .fade {
    opacity:0 !important;
  }

  /* for the after stage of the quote.*/
  .executed {
    opacity:1;
    right: 0;
    -webkit-transition: all 2s ease-in-out;
      -moz-transition: all 2s ease-in-out;
      -o-transition: all 2s ease-in-out;
      transition: all 2s ease-in-out;
  }

  /* for the before stage of the quote; should slide right when presented and left when removed.  */
  .reset {
    opacity:0;
    right:600;
    -webkit-transition: all 1s ease-in-out;
      -moz-transition: all 1s ease-in-out;
      -o-transition: all 1s ease-in-out;
      transition: all 1s ease-in-out;
  }

  /* for the instructions at the bottom */
  .bottom {
    bottom:10;
    position: absolute;
    color:#454545;
    font-family:Inconsolata;
  }
```

  Now that we've styled our app, we need to implement the true function of it. Let's go ahead and do that.

### The API function


To get the quotes, we need to call the Quotes API when the spacebar is pressed. Luckily, JQuery implements a window function just for that, known as keypress. To understand what to write, we have to go through what is happening in our site at that point. The current quote being displayed will be removed and we will request for a new one. When it returns from the API, we will display it.


- our first function implemnets $(window).keypress() to find when the spacebar is pressed.
- inside that function we use add, remove and toggle class to control our 'before' and 'after' states of our quote/source. For example, when the spacebar is pressed, everything should return to the 'before' state, and when the quote is returned from the API, vice versa. <a class = "underline" href="https://api.jquery.com/category/manipulation/class-attribute/">more on JQuery Classes</a>
- we should request to the API and get a response in jsonp. The url to hit is ```http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback``` and we can use some pretty simple AJAX (a way to send post/get requests) to retrieve the quote from the API. <a class = "underline" href="http://api.jquery.com/jquery.ajax/">more on AJAX</a>
- once the JSONP is returned from the API AJAX call, the script will callback to a function named 'mycallback'. This can be altered by changing the 'jsonp' field in your GET url. Inside this function, we simply need to grab the quote, change the text of each div containing the quote and source, and change their states (to the 'after' state) so they can be presented. <a class = "underline" href="https://www.sitepoint.com/jsonp-examples/">more on JSONP</a>
- some notes:
	- on timing, we use the setTimeout() function for one second so our divs get enough time to fully return to their before states. If the API calls back too fast, there can be complications. Another way to do this is to implement a timeout function inside the callback.
	- on JSONP, we mainly use this because of cross-domain requests and CORS issues. This API was a pain to deal with (at least testing it), JSONP allows us to bypass this issue with cross-domain requests and is fully supported by the API we are using.



Voila! May this be useful when you are lacking inspiration:

```js
    $(window).keypress(function(e) {
      if (e.which === 32) {
        $("#quote").addClass("reset");
        $("#quote").removeClass("executed");
        $("#writer").toggleClass("fade");
        setTimeout(function(){
          $.ajax({
            crossOrigin: true,
            url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=
            rand&filter[posts_per_page]=1&_jsonp=mycallback",
            dataType:"jsonp"
        });
        }, 1000);
      }
  });
  function mycallback(json){
    var quote = json[0];
    $("#quote").html(quote.content)
    $("#writer").html(quote.title)
    $("#quote").addClass("executed");
      $("#quote").removeClass("reset");
      $("#writer").toggleClass("fade");
  }
```
### What's next?
Your API is super powerful! Try making the site responsive and changing up the style. Try making other apps using JSON APIs like a <a href="/weather.html" class="underline">weather app!</a>
