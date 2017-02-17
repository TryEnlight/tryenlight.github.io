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

In the markup, you could see a div with class `calc`, that is our calculator. It has two child elements, a div classed `results` and a div classed `keypad`. As the name suggests, results is the place where results are displayed and keypad is calculator's keypad. If you peek inside, you could see that keypad is divided into `row`s and each button has some <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*" class="underline">data-attributes</a>. Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

<pre class="prettyprint"><xmp>
  <button class="key" data-value="7" data-action="number">7</button>
 </xmp></pre>

The attribute `data-value` stores the value of button and `data-action` ditactes what action is to be perfomed if we click it. Please read more to find out how are `data-attributes` used in building this calculator.

#### The Stying

CSS for calculator project is defined in the file `style.css`. Apart from what you have seen on other tutorials, there are three things that might interest you in here

  1. `@import url('https://fonts.googleapis.com/css?family=Roboto');` We are importing a custom font into our project here, to learn more about importing custom fonts, checkout this<a href="https://fonts.google.com/" class="underline">link</a>. We have used `@import` to import the font, the @import CSS at-rule is used to import style rules from other style sheets <a href="http://www.cssnewbie.com/css-import-rule/#.WKcWjSF948o">Read more</a>.
  2. `display: flex;` Flexbox is a new display type introduced in CSS3, it is very handy in implementing layouts intuitively. A tutorial on flexbox can take up a lot of space, go over to <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks</a>, read this in deapth tutorial and gain knowledge on CSS flexbox.
  3. `.results > *` `.key:hover`, these are some advanced CSS selectors, `>` is a child selector, this means "select elements that are direct descendants of elements with class results". `:hover` is a CSS psuedo selector, which means to apply a style when an element is in hovered state. Read the CSS selector <a href="https://css-tricks.com/almanac/selectors/">almanac</a> here.
