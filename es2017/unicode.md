###### *[Home](https://tashbalrai.github.io)*, **Unicode**

## Unicode
At the core of computers there is only electronic digital signal processing. Anything and everything that is presented on the computer screen in the form of the word, text, numbers are just the interpretation of the signals in the forms of bytes and then a special meaning is formed out of these byte values (decimal, octal or hexadecimal) to map them to characters. Different byte values  or character codes represent different character/symbol that are shown on the computer screen in a human friendly way. Such a common character/symbol mapping is popularly known as ASCII (American Standard Codes for Information Interchange). 

A group of character codes and their corresponding characters/symbolic representation is called a character set. There were different character sets invented to display different characters/symbols in different languages, for example, to represent chinese characters a character set *BIG5* is used and for english, *iso-8859-1* is used to represent english alphabets. A character set is also known as *charset*. There are many charsets defined to represent different symbols or different languages, locations and symbols in subjects like mathematics PI symbols.

A programmer who is working on an application, needs to correctly identify the character set in order to represent the symbols associated with a code in a specific charset. So, any application that would be used across different cultures and languages a developer have to do a hard job in figuring out the correct charset that can accurately define symbol. One such example of the application is a web application that require localization and internationalization.

To cater this problem, computer scientists started think on having a common charset that is capable enough to display every possible symbol without juggling through all these different charsets. Such a scheme of character set is called **Unicode**.
