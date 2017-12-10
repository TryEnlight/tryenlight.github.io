---
layout: post
title: Guessing Number Game
description: Build a fun number guessing game using python in the terminal
author: <a class="link white" href="https://shamdasani.org">Samay Shamdasani</a>
category: python
difficulty: beginner
permalink: /guess-number
img: /img/guess-number.gif
demourl: https://repl.it/FgfS/0
source: https://github.com/tryenlight/enlight/tree/master/demo/python/guess-number
language: Python
color: blue
---

### Getting Started

Today we'll be creating a guessing number game in Python that you can run in your terminal. Open up your favorite text editor and let's begin!

To start, we'll need to ```import random``` as the random module will let us generate a random number for the user to guess.

Then, we'll set three variables:
- ```numberofGuesses```: set to 0 - contains how many guesses the user takes
- ```number```: to generate the random number
- ```name```: set to ```raw_input``` to get user's name

The ```number``` variable will be set to ```random.randint(1,50)```. This assigns the variable to a random integer between 1 and 50. You may change the range
if you wish.

Here's what our code should look like so far:

```python
import random

numberofGuesses = 0
number = random.randint(1,50)

name = raw_input("Hello! What is your name? ")
```


### Creating the while & if loops

Now, let's print a message to the user asking to guess a number between 1 and 50. After that, we can run more ```raw_inputs``` as guesses and calculate whether the guess was too high or low in a [while](https://docs.python.org/2/reference/compound_stmts.html#the-while-statement) loop with [if](https://docs.python.org/2/reference/compound_stmts.html#the-if-statement) statements.

Our while loop will run the functions in it until a certain number of guesses. In this case the while loop will be set to ```while numberofGuesses < 8:```.
In the while loop, we can do the following:
- set a ```guess``` variable to ```raw_input``` for the guess
  - turn the ```guess``` input into an integer
- for every guess, add (```1```) to the variable of ```numberofGuesses```
- set a ```guessesLeft``` variable to 8 - ```numberofGuesses```
- use ```if``` statements to see if guess is larger or smaller than number
  - convert ```guessesLeft``` to a string and print out if number is to low/high
- set an if for ```guess===number```, which breaks the loop if true and prints out that you guessed the number in ```numberofGuesses``` tries
- set an if for ```guess!=number``` (not equal), which prints out the ```number``` that the computer generated as the user did not guess it within 8 tries

That may seem like a lot - and it is!

```python
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
```


Take note that when we want to either use the number in code our print it out, we need to convert it. First, we convert it to an integer (```int(guess)```). In the same way, when we want to print out a number, we make sure it is converted to a string (```str(number)```).
