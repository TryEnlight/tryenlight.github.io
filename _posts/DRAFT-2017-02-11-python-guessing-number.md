---
layout: post
title: Guessing Number Game
description: a fun guessing number game in the terminal
category: python-easy
permalink: /guess-number
img: /img/guess-number.gif
demourl: https://repl.it/FgfS/0
source: https://github.com/samayshamdasani/enlight/tree/gh-pages/demo/python/guess-number
language: Python
---

### Getting Started 

<pre class="prettyprint">

  import random

  numberofGuesses = 0
  number = random.randint(1,50)

  name = raw_input("Hello! What is your name? ")

  print(name + ", I am thinking of a whole number between 1 and 50. Can you guess what it is?")

  while numberofGuesses < 8: 
    guess = raw_input("Take a guess ")
    guess = int(guess)

    numberofGuesses = numberofGuesses + 1;
    guessesLeft = 8 - numberofGuesses;

    if guess < number:
      guessesLeft=str(guessesLeft)
      print("Your guess is too low! You have " + guessesLeft + " guesses left")

    if guess > number:
      guessesLeft=str(guessesLeft)
      print("Your guess is too high! You have " + guessesLeft + " guesses left")

    if guess==number:
      break

  if guess==number:
    numberofGuesses=str(numberofGuesses)
    print("Good job! You guessed the number in " + numberofGuesses + " tries :)")

  if guess!=number:
    number=str(number)
    print("Sorry. The number I was thinking of was " + number + " :)")

    

</pre>




