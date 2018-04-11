## Stored Procedures
were added to MySQL 5.0

### Advantages
Are compiled so are fast. 

Compiled procedure work per connection. For new connection works like a SQL query.

Help reduce database traffic because less data is transferred.

All database interface functions are available.

Secure, DBA can grant permission to stored procedure per application.

### Disadvantages
More the stored procedures more memory and CPU is consumed.

Not suitable for logical funcationality. Good for database related functionality only.

Not designed for developing complex and flexible business logic.

Not easy to debug stored procedures. MySQL do not provide debugging capabilities.

Developing and maintaining requires specialized skills.
