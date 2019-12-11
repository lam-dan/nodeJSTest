# nodeJSTest

As part of another job application, I was given a JavaScript coding exam on data manipulation, data structures, and sorting.

## Step 1
Write a node script that takes data like this:

```
const input = 'store_one,orange,3\n'
            + 'store_one,kiwi,5\n'
            + 'store_one,orange,1\n'
            + 'store_two,orange,1\n';`
```
and transforms it into a nested data structure:
```
{
    "store_one": {
        "orange": 4,  // Note that two separate rows
                      // from the input had their values added: 3 + 1.
        "kiwi": 5
    },
    "store_two": {
        "orange": 1
    }
}
```
You can assume that each row contains exactly two commas and the last value can be parsed as an int. Use ‹string›.split(‹delimiter›).

## Step 2
You’re now interested in how many of a certain fruit are available in the city.

Write an expression that transforms the data structure above into a data structure like:
```
{
    "orange": 5,
    "kiwi": 5
}
```
…where the numbers are the total counts among all stores.

Please write this as an expression that uses .reduce at least once, and that contains no for loops.

Note that .reduce is only defined on arrays, but you can use [...‹iterator›] to turn an iterator into an array.

You may want to use Object.values here.

## Step 3
Some time has passed and you now receive a new count of fruits:
```
const input2 = 'store_one,orange,2\n'
             + 'store_one,kiwi,1\n';
```
## Step 3.1
Calculate out how many fruits got sold in total:

7

## Step 3.2
Generate a list of all fruit names, sorted by these criteria: 1. If a fruit has a higher percentage sold, it should be earlier in the list. - (for example, 60% of oranges were sold here, and 80% of oranges) 1. If the sold-percentages were the same, sort them alphabetically using the JS built-in method .sort of arrays.
To do this, use ‹a›.localeCompare(‹b›) which returns: - a negative value when ‹a› comes before ‹b› - zero when they’re the same - a positive value when ‹a› comes after ‹b›

You may want to use Object.keys here.

['kiwi',   // 1/5 remain, so 4/5 were sold.
 'orange'] // 2/5 remain, so 3/5 were sold.
