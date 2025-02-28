## OWASP Security Checklist
- Sanitize URL routing. Default php routing is based on the actual files on the disk that ends with .php extension. Any direct link can execute malicious code on server. Make sure uploaded file are stored properly, having proper permissions, sanitize content and filenames.

- Protect source code and configuration files, don't put them in public directories which can be downloaded publically. use .htaccess file to limit the access of code files directly.

- Sanitize user input properly. Do not trust user input, validate all user inputted data.

- Cross Site Scripting (XSS). all input must be sanitized to either remove all html tags or allow trusted  tags only.

- File uploads. Sanitize uploaded file name. Do not allow uploading of executable files. Set proper permissions on each uploaded file.

- Check uploaded file type. Do not relay on $_FILES for file type information it could be forged.

- Public directory of the web server should only reveal public assets such as images, css etc.

- Do not use $_REQUEST, it contains all sources like GET, POST and COOKIES so making difficult to know the source of data.

- SQL Injections
    - Never concate or interpolate the SQL queries
    - Do not rely on mysql_real_escape_strings
    - Use prepared statements (Most ORM handle SQL injections very well)
    - Use ORM for better security like Doctrine

- Shell Injections
    - Do not use the following function:
        shell_exec
        exec
        passthru
        system
        backtick operators
    - Do not pass user input directly to shell functions.

- Code Injections - Do not use eval, it is also slower

- No Trusted Sections in application.

- HTTP-only COOKIES; cannot be accessed directly in javascript. A kind of measure for CSRF.

- Do not use md5 use SHA-256. Use mhash or mcrypt library for hashing and encryption

- CSRF (Cross Site Request Frogery)
    - Use re-authentication for critical operations such as change password, recovery email
    - Use two factor authentication
    - Use CAPTCHAs
    - AJAX powered forms should re-generate CSRF tokens
