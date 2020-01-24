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
| **Program Sums Character Values**| Input: "3 1 1 1 1" | Page Displays: 7 |
| **Program Sums Character Values**| Input: "3 1 1 1 1" | Page Displays: 7 |
| **Program Sums Character Values**| Input: "3 1 1 1 1" | Page Displays: 7 |
| **Program Sums Character Values**| Input: "3 1 1 1 1" | Page Displays: 7 |

## Setup/Installation Requirements

1. To run this program, you must have a C# compiler. I use [Mono](http://www.mono-project.com).
2. Install the [Nancy](http://nancyfx.org/) framework to use the view engine. Follow the link for installation instructions.
3. Clone this repository.
4. Open the command line--I use PowerShell--and navigate into the repository. Use the command "dnx kestrel" to start the server.
5. On your browser, navigate to "localhost:5004" and enjoy!

## Known Bugs
* No known bugs at this time.

## Technologies Used
* C#
  * Nancy framework
  * Razor View Engine
  * ASP.NET Kestrel HTTP server
  * xUnit

* HTML

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Marilyn Carlin, David Wilson}_**