# Scrabble Score Checker

#### A program that takes user input of an integer value and returns a range.

#### By **Marilyn Carlin and David Wilson**

## Description

A program that takes user input of an integer value and returns a range of values starting from 0 and ending at the value of the user input. If the input contains a 1, 2, or 3, those values in the range will be replaced with "beep", "boop", and "I'm sorry Dave, I can't do that" respectively. 


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Returns a range from 0 to user input value** | 4 | 0, 1, 2, 3, 4 |
| **Replaces the value 1 in the return range with "Beep"** | User input: 4 | Output: 0, "Beep!", 1, 2, 3, 4, |
| **While maintaining the priot spec, Replaces the value 2 in the return range with "Boop"**| User Input: 4 | Output: 0, "Beep!","Boop",3, 4|
| **While maintaining the prior 2 specs, Replaces the value 3 in the return range with "I'm sorry Dave, I can't do that"**| Input: 4 | Output: 0, "Beep!","Boop","I'm sorry Dave, I can't do that", 4  |
| **Changes the value 13 in the returned range to "I'm sorry Dave, I can't do that"** | Input: 13| Output: 0, "Beep!","Boop","I'm sorry Dave, I can't do that", 4, 5...10, 11, 12, "I'm sorry Dave, I can't do that" |
| **Changes the value 21 in the returned range to "Boop"**| Input: 21| Output: 0, "Beep!","Boop","I'm sorry Dave, I can't do that", 4, 5...19, 20, "Boop" |
| **Changes the value 32 in the returned range to "I'm sorry Dave, I can't do that"**| Input: 32 | Output: 0, "Beep!","Boop","I'm sorry Dave, I can't do that", 4, 5...29, 30, 31 "I'm sorry Dave, I can't do that" |

## Setup/Installation Requirements

1. To run this program clone the following github repository:
 https://github.com/dcluukko/ind-proj-3.git
2. Navigate into the directory "ind-proj-3" and type "open index.html"
3. Enter a number into the form and click "Get your range!"
4. Your range should return with 1 replaced with "beep", 2 replaced with "boop", and 3 replaced with "I'm sorry David, I can't do that"
5. Furthermore, the numbers 13 and 32should be replaced with "I'm sorry Dave, I can't do that" and the number 21 should be replaced with "boop". 
## Known Bugs
* Most of the tasks listed in this readme have not been completed.

## Technologies Used
* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery
 


## Support and contact details

_Email: Dcluukko@gmail.com for questions, comments, concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2020 **_{Dana Luukko, Epicodus}_**