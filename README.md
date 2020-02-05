# Independent Project 2: "Beep", "Boop", "I'm Sorry Dave. I can't do that." Range Returner
# 1/24/2020
#### A program that takes user input of an integer value and returns a range.

#### By **Dana Luukko**

## Description

A program that takes user input of an integer value and returns a range of values starting from 0 and ending at the value of the user input. If the range contains a 1, 2, or 3, those values in the range will be replaced with "beep", "boop", and "I'm sorry Dave, I can't do that" respectively. 


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Returns a range from 0 to user input value** | 4 | 0, 1, 2, 3, 4 |
| **Replaces the value 1 in the return range with "Beep"** | 4 | Output: 0, "Beep!", 1, 2, 3, 4, |
| **While maintaining the priot spec, Replaces the value 2 in the return range with "Boop"**| 4 | Output: 0, "Beep!","Boop",3, 4|
| **While maintaining the prior 2 specs, Replaces the value 3 in the return range with "I'm sorry Dave, I can't do that"**| 4 | Output: 0, "Beep!","Boop","I'm sorry Dave. I can't do that", 4  |
|**Replace 13 with "I'm sorry Dave. I can't do that."** | 13  | 0, beep, boop, Dave, 4, 5, 6, 7, 8, 9, beep, beep, boop, I'm sorry Dave. I can't do that. |
|**Replace 21 with "boop"** | 21 |  0, beep, boop, Dave, 4, 5, 6, 7, 8, 9, beep, beep, boop, Dave, beep, beep, beep, beep, beep, beep, boop, boop  |
|**Replace 32 with I'm sorry Dave. I can't do that"** | 32 | 0, beep, boop, Dave, 4, 5, 6, 7, 8, 9, beep, beep, boop, Dave, beep, beep, beep, beep, beep, beep, boop, boop, boop, Dave, boop, boop, boop, boop, boop, boop, Dave, Dave, I'm sorry Dave. I can't do that. |
## Setup/Installation Requirements

1. Navigated to desktop in command:
$ cd desktop 
2. Clone Git repository to desktop:
$ git clone https://github.com/dcluukko/ind-proj-3.git
2. Navigate into the directory "ind-proj-3":
$ cd ind-proj-3
3. Open the html file in web browser:
$ open index.html
4. Enter a number into the form and click the button labeled "Get Your Range!"
5. The user should recieve a range from 0 to the number inputted with the numbers 1, 2, and 3 replaced with "Beep", "Boop", and "I'm sorry Dave. I can't do that"
 

## Known Bugs
* No known bugs.

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

Copyright (c) 2020 **_Dana Luukko, Epicodus_**