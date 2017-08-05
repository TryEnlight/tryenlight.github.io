---
layout: post
title: Twitter Bot
description: Build a virtual machine that can tweet!
author: <a class="link white" href="https://shamdasani.org">Samay Shamdasani</a>
category: nodejs
difficulty: intermediate
permalink: /twitter-bot
img: /img/twitter-bot.png
demourl: https://twitter.com/InspireMe77
source: https://github.com/samayshamdasani/enlight/tree/gh-pages/demo/node-js/bot
language: Node.js
color: orange
---

Today, we'll be building our very own Twitter Bot with Node.js. Our bot will fetch a random quote using the [Forismatic API](https://forismatic.com/en/api/) and then, of course, tweet it in an attempt to look smart!

First off, make sure you have [Node.js and npm](https://nodejs.org/en/) installed. Then, create a new folder for your application and ```cd``` into it from the command line. Then, run ```npm init``` and go through the process to initialize a new node application. 

Now, the twitter API module we'll be using is [twit](https://github.com/ttezel/twit). The module we'll be using to make requests is [request](https://github.com/request/request) 
Run ```npm install --save twit request``` to install it. 

Once we have everything ready to go, create a ```index.js``` file where we'll be coding our application. 

Let's get started by requiring our modules in our ```index.js``` file. 

<pre class="prettyprint linenums">
var Twit = require('twit');
var request = require('request');
</pre>

Oh, wait. There's one more step before we actully start writing more code. Since we're building a twitter bot, we need to register a twitter application!

You'll need to either create a new Twitter account or use your own to create a new [Twitter application](https://apps.twitter.com). Create your app and then navigate to the "Keys & Access Tokens" Page. From there, copy your "top secret" keys and tokens into your ```index.js``` file using the following template:

<pre class="prettyprint linenums">
var Twit = require('twit');
var request = require('request');

var T = new Twit({
  consumer_key:         'TOP SECRET CODE',
  consumer_secret:      'TOP SECRET CODE',
  access_token:         'TOP SECRET CODE',
  access_token_secret:  'TOP SECRET CODE'
})
</pre>

Here, we're defining the variable ```T``` and setting it to initialize the Twit library with our application that we registered so we can post, search, favorite, retweet, and basically do whatever we want on Twitter. 

To build what we want, we need to fetch a random quote. Luckily, [Forismatic's API](https://forismatic.com/en/api/) is very easy to use as we just need a url. You can set the url below as a ```const``` as unlike variables, it will not be changed. 

```https://api.forismatic.com/api/1.0/?method=getQuote&key=123456&format=text&lang=en```

One problem that we may run to when building these kind of applications is that since we have to make a request, we want to:
- call a function to make the request
- send that data to another function to tweet
- tweet the data

This may look simple - except for the sending data to another function part. To do this in JavaScript, we use something called [callbacks](http://callbackhell.com/). Callbacks allow us to write asynchronous code. This means that to make this program as efficient as it can be, we have to use callbacks. 

Let's start by creating a ```getQuote``` function with a paramenter that's named ```callback```. Then, using request, we can make a request to the url and set the data of the request to the callback. 

<pre class="prettyprint linenums">
function getQuote (callback) {
	request(url, function (error, response, body) {
	  console.log('error:', error); // Print the error if one occurred
	  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
	  console.log('body:', body);
	  callback(body); 
	});
}
</pre>

Now, we have our data, in this case ```body``` ready to be used in another function. The next function we'll be creating is a ```postTweet``` function with the ```tweet``` parameter. Using [T.post](https://github.com/ttezel/twit#usage), we are able to post with the status (data of tweet) to be ```tweet```.

<pre class="prettyprint linenums">
function postTweet(tweet) {
	console.log(tweet);
	T.post('statuses/update', { status: tweet }, function(err, data, response) {
	  console.log(data);
	})
}
</pre>

We've written the two functions. What next? Well, now we need to connect them together! We want ```getQuote``` to run first, so we'll need to run it first with the parameter of ```postTweet``` which is our callback. 

<pre class="prettyprint linenums">
getQuote(postTweet)
</pre>

If you take a look at your code, it's actually just calling the ```getQuote``` function, setting the callback to the data that was requested, and then it calls the ```postTweet``` function which has the ```tweet``` parameter. However, the ```tweet``` parameter is equal to the body of the request all because of the callback. 

You did it! Save your file and then run ```node index.js``` in your terminal. You should see everything being logged and the tweet posted! I encourage you to continue making the bot more advanced using the [twit](https://github.com/ttezel/twit) library! If you have any questions, feel free to leave them below :)




