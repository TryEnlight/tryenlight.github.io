---
layout: post
title: Calculator App
description: Simple calculator with HTML, CSS and JS
category: middle-web
permalink: /calculator
img: /img/calc.png
demourl: /demo/calculator-project/index.html
source: https://github.com/samayshamdasani/enlight/tree/gh-pages/demo/calculator-project
---

### Getting Started

This calculator app is based on a design over at <a href="https://dribbble.com/shots/3125651-Daily-UI-004-Calculator" class="underline">dribble</a>. We have made a few minor changes to the original design, but you are always welcome to tinker and improve this app.

### The Markup

In the markup, you could see a div with class `calc`, that is our calculator. I has two children a div classed `results` and a div classed `keypad`. As the name suggests, results is the place where results are displayed and keypad is calculator's keypad. If you peek inside, you could see that keypad is divided into `row`s and each button has some <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*" class="underline">data-attributes</a>. Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

<pre class="prettyprint"><xmp>
  <button class="key" data-value="7" data-action="number">7</button>
 </xmp></pre>

The attribute `data-value` stores the value of button and `data-action` ditactes wCustom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elementshat action to be perfomed if we click it. Please read more to find out how are `data-attributes` used in building this calculator
