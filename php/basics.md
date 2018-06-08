###### *[Home](https://tashbalrai.github.io)*, [Basics](https://tashbalrai.github.io/php/basics.html), [OOPs - 1](https://tashbalrai.github.io/php/oops/basics.html), [OOPs - 2](https://tashbalrai.github.io/php/oops/basics2.html), [OOPs - Traits](https://tashbalrai.github.io/php/oops/traits.html), [OOPs - Advanced](https://tashbalrai.github.io/php/oops/advanced.html), [Autoloading](https://tashbalrai.github.io/php/oops/autoloading.html)

## About PHP
1. Recursive Acronym PHP: Hypertext Preprocessor
2. General purpose scripting language. Especially for WEB
3. Uses open close tags (<?php ?>) for PHP instructions which makes it embedded in HTML.
4. Easy to learn; but have caveates
5. Syntax drawn from C, JAVA and PERL.

## PHP Tags
1. Default tags <?php ?>.
2. Echo tags <?= ?>; Always on since PHP 5.4.
3. Short tags <? ?> allowed with php.ini setting short_open_tags.
4. *ASP style tags <% %> removed from PHP 7.0.0.*
5. *Script style tags <script language="php"></script> removed from PHP 7.0.0.*

> It is a best practice to omit the closing tag if file is pure PHP to avoid buffering accidental whitespace or new line characters.

## Escaping from HTML
Everything outside PHP tags is unparsed.

On encountering closing tags, PHP starts outputting content **except** immediate new line.

Conditional statements can skip the non PHP content blocks.

## Instruction Separation
Each instruction must be separated by semicolon ';'.

Closing PHP tag automatically applies semicolon on last instruction if not available.

Closing tag includes immediate new line. So immediate new line character after closing tag is not output.

## Comments
Unix style, starts with #, single line
C style, starts with //, single line
/\* ... \*/, multiline comments

## Primitive Types
4 Scalar types
  1. boolean
  2. integer
  3. float aka double
  4. string

4 Compound types
  1. array
  2. object
  3. callable since PHP 5.4
  4. iterable since PHP 7.1

2 Special types
  1. resource
  2. NULL
  
## pseudo-types
Only for documentation purpose, cannot be used in code for type hinting.
1. mixed
2. number
3. callback aka callable
4. array|object = either array or object
5. void = can be used as return type hint since PHP 7.1
6. $... = pseudo variable

Type is decided at runtime based on the context of the PHP expressions.

```var_dump()``` = To analyze the type of the expression or variable.

```get_type()``` = More human friendly type.

```is_<type>()``` = To test type, use is_string(), is_int(), is_float(), is_bool() etc.

 
