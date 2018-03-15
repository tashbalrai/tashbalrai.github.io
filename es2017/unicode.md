###### *[Home](https://tashbalrai.github.io)*, [Block Level Scoping](https://tashbalrai.github.io/es2017/index.html), [Numeric Features](https://tashbalrai.github.io/es2017/numfeatures.html), [Extended Objects](https://tashbalrai.github.io/es2017/object.html), [String Features](https://tashbalrai.github.io/es2017/string.html), **Unicode**, [Symbols](https://tashbalrai.github.io/es2017/symbols.html), [Functions](https://tashbalrai.github.io/es2017/functions.html), [Destructuring](https://tashbalrai.github.io/es2017/destructuring.html), [Sets and Maps](https://tashbalrai.github.io/es2017/setsmaps.html), [Iterators and Generators](https://tashbalrai.github.io/es2017/iterators.html), [Promises](https://tashbalrai.github.io/es2017/promises.html), [Classes](https://tashbalrai.github.io/es2017/class.html), [Modules](https://tashbalrai.github.io/es2017/modules.html)

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

#### BOM Byte Order Mark
In unicode BOM is a special code point U+FEFF which tells the consumer of the text stream that in which order the bytes of a text stream is presented. BOM is different for each type of unicode encoding for example UTF-8, UTF-16 etc. Here, byte order means endianness which is either big endian or low endian. In big endian byte order the more significant bytes of the code points come first and by default BIG endian order is used. In low endian byte order the least significant bytes comes first.

BOM matters only in the information interchange/trasnmission of different channels and is not concerned with text processing once the complete text stream has been downloaded successfully.

BOM itself is encoded in the same scheme (endianness) as the rest of the document, but has a known value i.e. U+FEFF, the consumer of the text can examine these first few bytes to determine the encoding. The BOM thus gives the producer of the text a way to describe the text endianness to the consumer of the text without requiring some contract or metadata outside of the text stream itself.

#### Normalization
In unicode, some graphemes can be represented as a signle code point or multiple code points can be combined together to represent a signle grapheme. For example, the grapheme ö can be represented as a single code point or as an o followed by a combining character ¨ (double dot). Normalization is about translating a text to a canonical representation. These different ways of representing a grapheme is standardized to a signle code point so that it could be useful for text processing functions for example, searching a text in the string. Unicode specifies several normalizations. 

### Unicode Encodings
Unicode have different encoding schemes to encode text. These encoding formats are UTF-8, UTF-16 and UTF-32. There are other formats too but these are the most popular and widely used encoding formats.

#### UTF-8
UTF-8 uses 8 bits of code unit to encode a particular grapheme. All the ASCII characters can be represented by 1 code unit i.e. 8 bits and that's why this encoding scheme compatible with ASCII and is used videly in web, text processing systems where compatibility with older applications is required. Higher order code points can user 1 - 4 code units. Because of its capability of being compatible with all of the major older charsets it is widely used in JSON, XML, HTML and on almost on web applications.

#### UTF-16
UTF-16 uses 16 bits of code unit and to represent a code unit it can use either 1 code unit or 2 code units. It is not compatible with older systems of text encodings.

#### UTF-32
UTF-32 uses 32 bits of code unit. Its is fixed lenth encoding scheme because all the code points can be represented only with one code unit of 32 bits.
