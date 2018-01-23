###### *[Home](https://tashbalrai.github.io)*, **Unicode**

## Unicode
At the core of computers there is only electronic digital signal processing. Anything and everything that is presented on the computer screen in the form of the word, text, numbers are just the interpretation of the signals in the forms of bytes and then a special meaning is formed out of these byte values (decimal, octal or hexadecimal) to map them to characters. Different code values represent different character that are shown on the computer screen. Such a common character mapping is popularly known as ASCII (American Standard Codes for Information Interchange). 

A group of code values and their characters/symbolic representation is called a character set. There were different character sets invented to display different characters/symbol in different languages, for example, to represent chinese characters a character set *BIG5* is used to represent chinese language alphabets and for english, *iso-8859-1* is used to represent english alphabets. A character set is also known as charset. There are many charsets defined to represent different symbols or different languages, locations and subjects like Math PI symbols.

A programmer who is working on a word processing application needs to correctly identify the character set in order to represent the symbols associate with a code in a specific charset. So, any application that would be used across different cultures and languages a developer have to do a hard job in figuring out the correct charset that can accurately define symbol.

To cater this problem, computer scientists started think on having a common charset that is capable enough to display every possible symbol without juggling through all these different charsets. Such a scheme of character set is called **Unicode**.
