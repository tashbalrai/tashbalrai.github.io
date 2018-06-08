## Front-end Optimizations
Load assets from multiple domains, use CDN.
Reduce number of libraries to fewer libraries.
Use non-blocking javascript where possible.
Validate HTML make sure HTML tags nesting is proper.
Website design should use less images and more colors.
Utilize browser caching for static assets which are not dynamic in nature.
Try not to use WebFonts, extra HTTP request and data transfer
Reduce 301 redirects.
Use server scaled images, dont use css scaled images.
Try to utilize HTML5 features such as local and session storage.
Use HTTP/2 or SPDY protocol.
Try to figure out the DNC look up delays.

## Back-end optimizations

### Server Processing

#### 1 WEB SERVER
    - Use PHP7 and/or HHVM (HipHop Virtual Machine).
    - Use benchmarking tools to figure out the time consuming code.
#### 2 Cache Types
    - Opcode caching. Cache compiled code for faster response. APC/ZendOpcode Caching
    - Memory caching techniques to process frequently accessed data. For example, Redis, memcached.
    - Application caching to store the processed templates.
    - Try to use background processing for heavier processes (sending emails, notification, calculations). For example, queuing system like RabbitMQ.
    - Review your system architecture may be use micro services/application architecture with SPAs on frontend.
#### 3 Hosting Options
    - VPS
    - Shared hosting
    - Dedicated hosting.
    - SSD harddisks.
    - Cloud hosting
#### 4 Infrastructure
    - Load balancing
    - Website should be scalable and distributable
        - Do not use server bound sessions for example file based session storage.
        - Do not use server bound caching for example file based caching.
        - Remove code dependency.
        - Try to build independently host-able application module such as micro application architecture.
 #### 5 DATABASE
    - Optimize table, create indexes on frequently used columns in where conditions
    - Use SQL profiling tools to analyze and debug slow SQL queries
    - Try to use less joins in single database query.
    - Do not use sub queries because these are slower.
    - Try repairing the frequently accessed database tables.
    - Try database load balancing.
    - Try dropping unused database indexes.
