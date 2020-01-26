# "Beep", "Boop", "I'm Sorry Dave. I can't do that." Range Returner

#### A program that takes user input of an integer value and returns a range.

#### By **Dana Luukko**

## Description

A program that takes user input of an integer value and returns a range of values starting from 0 and ending at the value of the user input. If the input contains a 1, 2, or 3, those values in the range will be replaced with "beep", "boop", and "I'm sorry Dave, I can't do that" respectively. 


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Returns a range from 0 to user input value** | 4 | 0, 1, 2, 3, 4 |
| **Replaces the value 1 in the return range with "Beep"** | User input: 4 | Output: 0, "Beep!", 1, 2, 3, 4, |
| **While maintaining the priot spec, Replaces the value 2 in the return range with "Boop"**| User Input: 4 | Output: 0, "Beep!","Boop",3, 4|
| **While maintaining the prior 2 specs, Replaces the value 3 in the return range with "I'm sorry Dave, I can't do that"**| Input: 4 | Output: 0, "Beep!","Boop","I'm sorry Dave. I can't do that", 4  |

## Setup/Installation Requirements

1. To run this program clone the following github repository:
 https://github.com/dcluukko/ind-proj-3.git
2. Navigate into the directory "ind-proj-3" and type "open index.html"
3. Enter a number into the form and click "Get your range!"
4. Your range should return with 1 replaced with "beep", 2 replaced with "boop", and 3 replaced with "I'm sorry David, I can't do that"
5. Furthermore, any iteraton of the numbers 1, 2, and 3 should also be replaced with "beep", "boop", and "I'm sorry Dave. I can't so that" respectively. 
 
 ### Example  
| Input  | Output  |
|---|---|
| 13  | 0, beep, boop, Dave, 4, 5, 6, 7, 8, 9, beep, beep, boop, Dave  |
| 21 |  0, beep, boop, Dave, 4, 5, 6, 7, 8, 9, beep, beep, boop, Dave, beep, beep, beep, beep, beep, beep, boop, boop  |
| 32 |  0, beep, boop, Dave, 4, 5, 6, 7, 8, 9, beep, beep, boop, Dave, beep, beep, beep, beep, beep, beep, boop, boop, boop, Dave, boop, boop, boop, boop, boop, boop, Dave, Dave, Dave |
 
## Known Bugs
* Most of the tasks listed in this readme have not been completed.

## Technologies Usedit
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