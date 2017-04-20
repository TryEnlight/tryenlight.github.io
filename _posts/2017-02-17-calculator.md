---
layout: post-editor
title: Calculator 
description: Simple calculator with HTML, CSS and JS
category: hard-web
permalink: /calculator
img: /img/calc.gif
img-front: /img/calculator.gif
demourl: /demo/calculator-project/index.html
source: https://github.com/samayshamdasani/enlight/tree/gh-pages/demo/calculator-project
language: HTML/CSS/JS 
bg: bg-purple
---

### Getting Started

This calculator app is based on a design over at <a href="https://dribbble.com/shots/3125651-Daily-UI-004-Calculator" class="underline">dribble</a>. We have made a few minor changes to the original design, but you are always welcome to tinker and improve this app. It's file structure includes 
- index.html (markup)
- style.css (styling)
- app.js (calculator functions)

### The Markup

In the markup, we have a div with class `calc`, that is our calculator. It has two child elements, a div classed `results` and a div classed `keypad`. As the name suggests, results is the place where results are displayed and keypad is calculator's keypad. If you peek inside, you could see that keypad is divided into `row`s and each button has some <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*" class="underline">data-attributes</a>. Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

<pre class="prettyprint"><xmp>
  <button class="key" data-value="7" data-action="number">7</button>
 </xmp></pre>

The attribute `data-value` stores the value of button and `data-action` ditactes what action is to be perfomed if we click it. 

Here's what the markup looks like: 
<pre class="prettyprint"><xmp>
 <html lang="en">
 <head>
  <meta charset="UTF-8">
  <title>Calculator</title>
  <link rel="stylesheet" href="style.css">
 </head>
 <body id="calc">
  <div class="wrap">
    <div class="calc">
      <div class="results">
        <div class="accum">
          <p id="num-a"></p>
          <p id="operator"></p>
          <p id="num-b"></p>
        </div>
        <p class="res" id="result"></p>
      </div>
      <div class="keypad">
        <div class="row">
          <button class="key" data-value="7" data-action="number">7</button>
          <button class="key" data-value="8" data-action="number">8</button>
          <button class="key" data-value="9" data-action="number">9</button>
          <button class="key" data-value="+" data-action="operation">+</button>
        </div>
        <div class="row">
          <button class="key" data-value="4" data-action="number">4</button>
          <button class="key" data-value="5" data-action="number">5</button>
          <button class="key" data-value="6" data-action="number">6</button>
          <button class="key" data-value="-" data-action="operation">-</button>
        </div>
        <div class="row">
          <button class="key" data-value="1" data-action="number">1</button>
          <button class="key" data-value="2" data-action="number">2</button>
          <button class="key" data-value="3" data-action="number">3</button>
          <button class="key" data-value="*" data-action="operation">*</button>
        </div>
        <div class="row">
          <button class="key" data-value="0" data-action="number">0</button>
          <button class="key" data-value="c" data-action="operation">c</button>
          <button class="key" data-value="/" data-action="operation">/</button>
          <button class="key" data-value="=" data-action="calculate">=</button>
        </div>
      </div>
    </div>
  </div>
  <script src="app.js"></script>
 </body>
 </html>
</xmp></pre>

### The Styling

CSS for calculator project is defined in the file `style.css`. Apart from what you have seen on other tutorials, there are three things that might interest you in here

  1. `@import url('https://fonts.googleapis.com/css?family=Roboto');` We are importing a custom font into our project here, to learn more about importing custom fonts, checkout this<a href="https://fonts.google.com/" class="underline">link</a>. We have used `@import` to import the font, the @import CSS at-rule is used to import style rules from other style sheets <a href="http://www.cssnewbie.com/css-import-rule/#.WKcWjSF948o">Read more</a>.
  2. `display: flex;` Flexbox is a new display type introduced in CSS3, it is very handy in implementing layouts intuitively. A tutorial on flexbox can take up a lot of space, go over to <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks</a>, read this in deapth tutorial and gain knowledge on CSS flexbox.
  3. `.results > *` `.key:hover`, these are some advanced CSS selectors, `>` is a child selector, this means "select elements that are direct descendants of elements with class results". `:hover` is a CSS psuedo selector, which means to apply a style when an element is in hovered state. Read the CSS selector <a href="https://css-tricks.com/almanac/selectors/">almanac</a> here.

Here's our styling:
<pre class="prettyprint">
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  #calc {
    align-items: center;
    background-color: #A25BCD;
    display: flex;
    height: 95vh;
    justify-content: center;
  }

  .results {
    box-sizing: border-box;
    height: 220px;
    padding: 20px 20px;
  }

  .wrap {
    background-color: #4F31B5;
    border-radius: 20px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
    height: 560px;
    width: 360px;
    position: relative;
  }

  .row {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .key {
    background-color: #4F31B5;
    border: 2px solid #C3B2E4;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: bold;
    height: 60px;
    line-height: 60px;
    text-align: center;
    width: 60px;
  }

  .key:hover {
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
  }
  .key:focus {
    outline: none;
  }

  .results > * {
    color: white;
    font-family: 'Roboto', sans-serif;
  }

  .results {
    position: relative;
  }

  #result {
    bottom: 0;
    font-size: 48px;
    padding-right: 20px;
    position: absolute;
    right: 0;
  }
</pre>



### JavaScript

Markup defines the structure of the application, CSS gives the looks and JavaScript is the functionality. The best thing about JS is it's flexibility. It's a weakly typed language that can be used to write code in whatever programming style you like, be it Object Oriented, be it functional, be it procedural. But when you are working on a project, it's always good to define a set of rules and always follow these rules through out the development. These rules could be about syntax, the <a href="https://en.wikipedia.org/wiki/Programming_paradigm">paradigm</a> of choice or even could be about variableNamings.

Our objectives for this project are:

  1. Immutable calculator state
  2. Always display results using calculator state
  3. Try to follow functional programming, as much as possible
  4. Not more than two levels of nested logic in a function

Why should we keep the application state immutable, why should we keep state in the first place? Basically, in mostly all the modern frameworks and large applications, you have to keep the state. In these scenarios, it a healthy idea to see your application as a set of components that operate on and display the application's state. Different libraries have different approaches for manipulating state, some, such as Redux keep a single state object and keeps it immutable. No action would partially modify the application state. We hope this could be a used as a light introduction to such philosophies.

Our calculator state is generated with the function
<pre class="prettyprint">
  function generateState(operation, numA, numB, result) {
    var newState = {
      numA: numA || 0,
      numB: numB || 0,
      operation: operation,
      result: result
    };
    return newState;
  }
</pre>

numA is the first number, numB is the second number, operation holds the operator and result will be stored in result. All these details can be set as params. If no details are given, a default state is generated.

Simply put, what we are doing is add an event listener to the calculator block. This is a form of <a href="https://davidwalsh.name/event-delegate">event deligation</a>, the process of delegating a parent block to handle click events of all it's child elements. `calculator.addEventListener('click', handleClick);`. Then inside `handleClick`, we would find out what element triggered this event and extract what action is to be performed, with the help of data-attributes`var action = target.getAttribute('data-action');`.

With the help of an `evaluate` function, we generate a new caclculator state. And print that result using `printResult`. Evaluate checks the action and selects appropriate action. If the clicked button is a number, it will `setNumber`, if it's an operator- `setOperator`, if assign operator- `calculate`. If the click is on some random part of the board, just clone the state.

`setNumber` adds number to state. If operator is present the number will be saved as numB, otherwise, it will be saved as numA. `setOperator` sets the operator. `calculate` takes the state and calculates the result, sets result as numA and numB as zero.

The function `beautify` takes a string and cleans it up to be able to display as result.

Something different that you might be able to observe is that to clone a state, we write `return generateState(state.operator, state.numA, state.numB, state.result);`. why didn't we go with `return state;`. In JS, all objects are reffered with their variable name. So if we assign an object as a new variable, we are actually working with the same object.

<pre class="prettyprint">
  var a = {k: 123};
  var b = a;
  b.k = 333;
  console.log(a.k); // prints 333, because a and b refers to same object in memeory
  
  var a = 9; // assign a as primitive number 9
  var b = a;
  a = 10;
  console.log(a, b); // prints 10, 9; since a and b are assigned with primitives, they are not just references
</pre>

If we go with `generateState`, it won't assign the object, it would just assign each key such as operator, numA etc with a new JavaScript primitive.

Read more about JS object cloning <a href="http://blog.soulserv.net/understanding-object-cloning-in-javascript-part-i/">here</a>.

Here's our app.js file:
<pre class="prettyprint">
  // to generate state
  function generateState(operation, numA, numB, result) {
    var newState = {
      numA: numA || 0,
      numB: numB || 0,
      operation: operation,
      result: result
    };
    return newState;
  }

  // To add new number to calculator state
  function setNumber(state, newValue) {
    if (state.operation == null) {
      return generateState(state.operation, state.numA += newValue, state.numB, state.result);
    } else { // if operator is present, set as numB
      return generateState(state.operation, state.numA, state.numB += newValue, state.result);
    }
  }

  // To set an operator
  function setOperator(state, newValue) {
    if (newValue == 'c') { // if operator is clear, reset state
      return generateState();
    }
    return generateState(newValue, state.numA, state.numB, state.result);
  }

  // Generate result
  function calculate(state, newValue) {
    var numA = parseInt(state.numA);
    var numB = parseInt(state.numB);
    var operation = state.operation;
    var result;
    if (numA == NaN || numB == NaN) {
      return generateState(null, null, null, 'Invalid');
    }
    switch (operation) {
      case '+':
        result = numA + numB;
        break;
      case '-':
        result = numA - numB;
        break;
      case '*':
        result = numA * numB;
        break;
      case '/':
        result = numA / numB;
        break;
      default:
        result = null;
    }
    return generateState(null, result, null, result);
  }

  function evaluate(state, newAction, newValue) {
    switch (newAction) {
      case 'number':
        return setNumber(state, newValue);
      case 'operation':
        return setOperator(state, newValue);
      case 'calculate':
        return calculate(state, newValue);
      default: // click is elsewhere on the board
        return generateState(state.operator, state.numA, state.numB, state.result);
    }
  }

  function beautify(num) {
    var n = num
    if (n == undefined || n == NaN) {
      return 0;
    }
    return parseInt(num);
  }

  function printResult(state) {
    elemA.innerHTML = parseInt(state.numA);

    // To avoid showing numB as zero
    var numB = parseInt(state.numB);
    if (!numB) {
      numB = null;
    }
    elemB.innerHTML = numB;
    elemOperator.innerHTML = state.operation || null;
    elemResult.innerHTML = beautify(state.result);
  }

  function handleClick(event) {
    var target = event.target;
    var action = target.getAttribute('data-action');
    var value = target.getAttribute('data-value');
    calculatorState = evaluate(calculatorState, action, value);
    printResult(calculatorState);
  }

  var calculator = document.getElementById('calc');
  var elemA = document.getElementById('num-a');
  var elemB = document.getElementById('num-b');
  var elemOperator = document.getElementById('operator');
  var elemResult = document.getElementById('result');
  var calculatorState = generateState();

  calculator.addEventListener('click', handleClick);
</pre>

Hope this have introduced a few new things to your coding skills :)

### Improvements

The improvements that can be implemented to the calculator project:

  1. Add keyboard bindings
  2. Tweak style of equals button as in dribble
  3. Try adding new operators
  4. Add an undo button

Project & Tutorial by [Sravan S](https://github.com/sravan-s)
