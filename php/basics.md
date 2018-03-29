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
