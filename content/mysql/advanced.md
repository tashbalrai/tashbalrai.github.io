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

### Creating Stored Procedure
```DELIMITER <delimiter_to_use>``` to set the delimiter to custom delimiter.

```CREATE PROCEDURE <name_of_the_procedure>()``` command creates the stored procedure.

```BEGIN``` to start the stored procedure body.

```END``` indicate the end of the body.

Standard delimiter is ; semicolon.

```mysql
DELIMITER //
CREATE PROCEDURE GetAllUsers()
BEGIN
SELECT * FROM users;
END //
DELIMITER ;
```

```CALL``` to call the stored procedure.

```mysql
CALL GetALLUsers();
```

### Variables
```DECLARE variable_name, [variables] datatype(size) DEFAULT default_value;```

Above statement declare a variable.

Datatype could be any valid MySQL datatype.

Variable name should follow the rules for database column names.

```DEFAULT``` set the default value to all the variables declared in a single statement.

```SET variable_name = <value>``` SET used to assign a value to a variable.

```SELECT INTO``` can also be used to assign a resulting scalar value from a query. E.g.:

```mysql
SELECT COUNT(*) INTO total_count;
```

```BEGIN``` and ```END``` defines the scope of a variable. After end a variable is not available.

```@``` creates a session variable and is available through out the whole session.
