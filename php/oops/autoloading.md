```spl_autoload_register(function)``` function can register multiple autoloading functions. Recommended

```__autoload()``` can only allow one autoloading function so is discouraged to use.

Autoloading not available in PHP CLI.

## PSR-4 Autoloader
PSR-0 has been depricated and would be removed.

"class" refers to class, traits, interfaces and other similar structures.

Autoloaders must not throw exceptions, raise errors and should not return a value.

Fully classified class name (FQCN):

```\<Namespace>(\<SubNamespaceNames>)*\<ClassName>```
- Top level vendor namespace.
- May have one or more sub-namespaces.
- Must have terminating class name.
- No special meaning of underscore in any FQCN.
- Any combination of lower and upper case alphabets in FQCN.
- All class name MUST be referred in case-sensitive manner.

### Autoloading process:
FQCN corresponds to one "base directory", not including the leading namespace separator.

Namespace prefix (FQCN) corresponds to sub-directories inside base directory. 

Sub-namespace separator work as directory separator and name must be case-sensitive.

File name must end in ```.php``` and must be case-sensitive.

### Examples
**FQCN**
\Symfony\Core\Request

**Namespace Prefix**
Symfony\Core

**Base Directory**
./vendor/Symfony/Core/

**Resulting Path**
./vendor/Symfony/Core/Request.php


