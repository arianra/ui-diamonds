UI Diamonds
==========

A UI/JS framework for easy development

For now just a proof of concept.

## Install & Run
```
git clone git@github.com:M3kH/uidiamonds.git && cd uidiamonds && npm install && bower install
```
then compile the sass files ```app/style/main.scss``` => ```statics/css/```

**N.B.** - Host in a server and just browse the index.html


## The concept
I'm a JavaScript Lover, and so on some times use kind of framework like: Ember.js, Angular.js, etc...
they look too *magic* to me, and so on they don't make me trust in what going on.

Some of my thought are well expressed in some other articles like:
 - [What's the difference between Angular and Ractive?](http://blog.ractivejs.org/posts/whats-the-difference-between-angular-and-ractive/)

In this poor current version I try to realize two version for UI infrastructure.
One a classical MVC structure with view, models, collections.
One with a components structure ```app/js/_components/```.