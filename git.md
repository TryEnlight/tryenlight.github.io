---
layout: page
title: Learn Git
description: Resources to learn Git.
color: orange
---
*Written by [Raviteja Lingineni](http://www.heyraviteja.com/)*

So you want to learn git eh, well it's easy!

Here are a couple reasons why you might want to learn how to use git and Github:

* Code is always changing, sometimes those changes break the code. Git can help you revert changes and see what you changed.


* People work on big projects together, and independently. Use Github to make pull requests and change code and work on your own branch to keep things from breaking.


* Open Source is the way to go! You can publish your code, open issues and make pull requests that could help projects! In addition, you can also manage a project using Github.

## Getting Started
In this workshop here is what we will be doing:


1. **Get the Github Desktop Client**

	You can get started by installing the [Github Desktop Client](https://help.github.com/desktop/guides/getting-started/installing-github-desktop/#platform-windows)

	You can also use git from the command-line, but this is much easier for beginners. It's easier to visualize as well

2. **Make a Github Account**

	As the client installs, if you don't have a Github Account, make one now. You can do it by going to the Github [Website](https://github.com/).

3. **Set up the Github Desktop**

	Configure things like where repositories will go once they are saved and login to Github in the client.


4. **Explore Github**

	Play around with the actual Github website. Checkout what it is. Take a look at the [Enlight Github](https://github.com/TryEnlight). Every project or *repo* contains code of some sort. Code for the current Enlight Website can be seen there.


	 * Open the **git101** repo [here](https://github.com/utdmakerspace/git101)
	 * Go to **issues** tab on the top and create a new one that says that your name is missing
	 * Now you will need to hit the **Fork** Button. This let's you make your own personal copy of the Repo in your account
   * You want to fork something because you don't have write access to someone else's code. You will fork it, make some changes, and suggest those changes back to the people
	 * Head to your github website, click on your forked Repo, and press the green **Clone and Download** button
   * Now it should open up and ask you to add to your local folder


5. **Modify the file locally**

	Go to the names folder, and create a new file using a text editor of your choice. Call it `<yourname>.js` Make this file hold the following:

```js
function main() {				
	console.log("I'm about to commit a change");			
}

main()
```

6. **Commit and Make a Pull Request**

Go back to the Github Client. You should see that your changes to the git Repo are reflected. Git watches your projects and looks for changes. Using the client, write a simple commit message on the bottom. All commits need messages

* Committing a change means that a change is saved locally. You can always go back to this version

7. **Making a Pull Request**

After we make our changes, we want to be able to push the code to the original master that is sitting on Github. Don't you want to share your code?

First of all, modify your changed file to say:
```js
function main() {				
	console.log("<put your name here> just sent a pull request!");			
}
main()
```
Head back to the client. Commit your change earlier and put in a commit message. Make it detailed, say your name, and what your change was.

Now in the top right corner, above the `sync` button, you will find the Pull Request Button. Write a message, and piush your pull request! It should be visible in Github under the pull requests tab!


## Conclusion
That's all it takes to collaborate code on Github and track changes to your code. You can also manage a project and assign people to solve different issues. Hopefully, you get a feel for git with this, and we are hoping that your larger projects can make use of Git.

**Note**

You don't always have to make pull requests. Sometimes, you might trust the people to commit. You can have people just commit code, and hit the `Sync` button to push changes by adding [collaborators](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/).
