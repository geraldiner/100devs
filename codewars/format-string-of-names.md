# Challenge
(On the CodeWars website)[https://www.codewars.com/kata/53368a47e38700bd8300030d]
Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

```
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

```
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