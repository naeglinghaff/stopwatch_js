## Stopwatch

This exercise was inspired by the OOP video hosted by Programming with Mosh to explain OOP concepts in JS.

The full video can be found here: https://www.youtube.com/watch?v=PFmuCDHHpwk&t=3149s

### Challenge

To create a stopwatch that would be able to start, stop, reset and get the duration property of a stopwatch object.

### Implementation

Originally I implemented this project as a JS class. In that example my getter method looked something like this:
```
get () {
  return duration;
}
```

I wanted to try to implement the longer get: function exemplified in the video, so I changed the syntax to make my constructor object handle define property methods.

Using the local variables and defining them with let, rather than using

```
this._propertyname
 ```
 was a new and interesting experience. It allows for greater encapsulation and helped me to better understand the differences between scope and closure.

### Future

In the future, I can use this example to create more confined and protective code.

I need to do some further research on the following topics:

* Closures in JS
* Classes in JS - the defineProperty method does not work when it is defined inside a class. I'd like to find out if there is a way of accessing these methods inside JS classes.
