###### *[Home](https://tashbalrai.github.io)*, **Unicode**

## Unicode
At the core of computers there is only electronic digital signal processing. Anything and everything that is presented on the computer screen in the form of the word, text, numbers are just the interpretation of the signals in the forms of bytes and then a special meaning is formed out of these byte values (decimal, octal or hexadecimal) to map them to characters. Different byte values  or character codes represent different character/symbol that are shown on the computer screen in a human friendly way. Such a common character/symbol mapping is popularly known as ASCII (American Standard Codes for Information Interchange). 

A group of character codes and their corresponding characters/symbolic representation is called a character set. There were different character sets invented to display different characters/symbols in different languages, for example, to represent chinese characters a character set *BIG5* is used and for english, *iso-8859-1* is used to represent english alphabets. A character set is also known as *charset*. There are many charsets defined to represent different symbols or different languages, locations and symbols in subjects like mathematics PI symbols.

A programmer who is working on an application, needs to correctly identify the character set in order to represent the symbols associated with a code in a specific charset. So, any application that would be used across different cultures and languages a developer have to do a hard job in figuring out the correct charset that can accurately define symbol. One such example of the application is a web application that require localization and internationalization.

To cater this problem, computer scientists started think on having a common charset that is capable enough to display every possible symbol without juggling through all these different charsets. Such a scheme of character set is called **Unicode**.

**Unicode** was developed by Joe Becker of Xerox, Lee Collins and Mark Davis of Apple. Unicode was choosen to reflect Unique, Universal and Uniform character encodings. Unicode have 0-16 code spaces making total 17 code spaces, the very first code space is called **BMP - Basic Multilingual Plane** and all other planes falls under the **Supplementary Planes or Astral Planes**. Planes 3-13 are unassigned planes means no character codes has been assigned yet.

All the basic multilinugual requirements for internationalization and localization can be met with BMP so all most all of the web applications can be satisfied with BMP. 

### Unicode Concepts

Following are the few of the unicode concepts and/or terminologies that one should understand.

#### Code Point
A code point or code position is the code value that can be used to represent a particular symbol in the unicode charset. The hexadecimal range of code points is 0x0 to 0x10FFFF. Code points are referred by "U+" and then the hexadecimal number. BMP code points are referred by 4 digit hexadecimal e.g. U+0058 for the character LATIN CAPITAL LETTER X. For code points, outside the range of BMP can be referred by five or six digits hexadecimal number.

#### Code Unit
A code unit is the number of bits an encoding format uses to represent a unicode symbol. For example, UTF-8 encoding scheme uses 8 bits unit to form a code point and UTF-16 uses 16 bits unit to form a code point. A code point can be represented by one or more code units i.e. To represent a code point in the higher supplementary planes UTF-8 may use 4 code units of 8 bits each or a UTF-16 encoding would require 2 code units.

#### Characters and graphemes
Characters and graphemes are similar terms. Characters are the digital form of the atomic units of the written languages (on paper/books for an illustration). The same atomic units in the written form not digital is considered as a graphemes. Programmers think in characters and users think in graphemes. Sometimes several characters can be combined to represent a single grapheme. For example, we can represent a single grapheme ô in digital way by combining the character o and the character ^.

#### Glyph
Glyph is a particular or concrete way of displaying a grapheme by an application program. Unicode defines the character codes for different characters/graphemes but do not impose how to display them on screen (for example, style of rendering a character 'T' would be different for 'Time New Roman' font from 'Courier' font)


