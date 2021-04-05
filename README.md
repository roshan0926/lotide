# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @roshan0926/lotide`

**Require it:**

`const _ = require('@roshan0926/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: function that returns the first element of an array
* `tail`: function that returns all the elements excliding the last of an array
* `middle`: function that returns the middle value of an array (middle 2 if array has an even number of elements)
* `countLetters`: function that returns the count of the letters in a string
* `countOnly`: function that counts only the perscribed letters
* `eqArrays`: function that compares two arrays
* `eqObjects`: function that compares two objects
* `findKeyByValue`: function that returns a value based on the key it is asigned to search for 
* `findKey`: function that returns the key values of an object 
* `flatten`: function that returns a single array for nested arrays
* `letterPositions`: function that returns the index of a letter asinged from within a string
* `map`: function that creates an array with the results of a seperate array through a calling
* `without`: function that removes perscribed elements from an array 
* `takeUntil`: function that returns the inputted array until the designated index



