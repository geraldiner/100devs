# Challenge

(On the CodeWars website)[https://www.codewars.com/kata/53368a47e38700bd8300030d]
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

```javascript
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
```
Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

# My Solution

```javascript
function list(names){
  let str = "";
  if (names) {
    if (names.length == 0) {
        return str
    } else if (names.length == 1) {
     return names[0].name
    } else {
      for (var i = 0; i < names.length-2; i++) {
        str += names[i].name + ", "
      }
      str += names[names.length-2].name + " "
      str += "& " + names[names.length-1].name
    }
  }
  return str
}
```

# Refactoring Ideas
My first thought is that I handled the last part poorly. I thought there might be a better way to do it, but couldn't think of anything without having to look it up.

After submitting my solution, I learned that there's a reduce function. Next time I'll have to look it up on the MDN and see how it works and think about how it can be applied.