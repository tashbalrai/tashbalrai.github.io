###### *[Home](https://tashbalrai.github.io)*, [REST](https://tashbalrai.github.io/php/rest/basics.html), [REST Best Practices]

## REST Best Practices
Use nouns for resource URIs not verbs. Use plural nouns instead of singular to make is consistent

For aync operations, which takes too long to complete follow these steps:
 - Place a GET/POST request which takes long time to complete.
 - Create a new task and return HTTP status code **202 Accepted** with URI to track the status of the task created.
 - On completion, return **303 See Other** status code with URI of result output set in Location field.
 - On failure of the request, respond with **200 OK** and include the error details and reason of the error. On success return or display the information.

## REST API Versioning
API versioning is required for breaking changes:
- changes to the format data of response.
- a change in the response type (e.g. change interger to float)
- removing any part of the API

**Breaking changes** result in a change in major version number.

**Non-breaking changes** such as addition of new API endpoints, do not require change in major version number but is a good practice to change minor version number to track the API changes.

### How to versioning?
You can do the versioning either using the URI or header field approach.

#### URI
You can include the version identifier in the URL:

```
  https://www.example.com/v1/users/12
  https://apiv1.exmaple.com/users/12
```

#### Header Field
You can use the header field to specify the version number.

E.g.:
```
Accept-version: v1
Accept-version: v2
```

Or using the Accept header.
```
Accept: application/json; version=1.0
```

Using URI for versioning is the popular choice but voilates the rules of resource identification change. OR header versioning requires extra complexity to switching through the different version of content.

## Caching
One of the REST constraints is caching of the resource. You do not need to develop the cache in code. Existing HTTP cache infrastructure is used. Cache reduce the following:

- Latency

- Bandwidth

- Load on servers

- Hide network failures

GET = should be cachable by default.

POST =  NOT cachable by default but can be made cachable using Expires and Cache-Control header.

DELETE and PUT = NOT cachable at all.

### Caching Headers

**Expires** 

Expires header mention the absolute cache expiry. After the expiry date a request must re-validate the response with origin server. 

```
Expires: Fri, 20 May 2016 19:20:49 IST
```

**Cache-Control**

Comprise of one or more comma separated directives.

```
Cache-Control: max-age=3600
```

**Directives**

must-revalidate = once the cache expires, must re-validate response with origin server.

no-cache = max-age=0, must-revalidate means no chaching

max-age = specify for how long the cache must be stored (in seconds)

Cachable response should also include a validator. Either an Etag or Last-modified header.

ETag = a token to identify the state of the response over the lifetime of the resource.

Last-Modified = Date tells when the response last modified.

## Compression

If client is capable to uncompress the compressed data then server should use the compression technique while transferring the data over HTTP. It will reduce the size of the data transferred over the network.

### Accept-Encoding

Client tells server that which compression encoding it can understand by including the Accept-Encoding header in the request.

```
Accept-Encoding: compress, gzip
```

### Content-Encoding:

Server can detect the Accept-Encoding header and based on the acceptable encoding server can apply the compression algorithms. Server can apply multiple algorithms and in that case must specify the encodings in order with Content-Encoding header value.

```
Content-Encoding: gzip
```

## Content Negotiation

Server can support multiple representation of the same resource e.g.: XML, JSON etc. Different clients can ask for different content type. This is call content negotiation.

### Content negotiation using HTTP header

Client send the Accept header in the request telling the required content type e.g.: text/plain, application/xml, text/html, application/json, image/gif, image/jpeg etc.

```
Accept: application/json
```

Server include Content-Type header in response to tell client about the type of content.

## HTTP Request idempotent
GET, HEAD, TRACE, OPTIONS are idempotent.
POST is not idempotent as it will always create a new resource.
PUT is mostly idempotent as it will update the selected resource.
DELETE is idempotent

## REST Security

**1. Use Authentication (JWT)**

Either use the Basic Authorization or use the JWT JSON Web Token to authenticate each request.

**2. Keep It Simple**

Do not unnecessarily overcomplicate the REST api applications. Keep it simple and manageable as much possible.

**3. Always use HTTPS**

Always use HTTPS protocol for REST APIs to encrypt each and every request/response.

**4. Password HASH**

Always HASH the password to make is secure using some secure hashing algorithms such as SHA256, BCrypt.

**5. Never expose information on URLs**

Information must not be exposed to public in URLs. URLs must be clean without any information exposed. 

**6. Validate Every Input**

Never trust on user input. Always validate every user input.

**7. Rate Limiting**

Implement resource rate limiting and always deny access to over request made in a particular time range.

**8. Use API Keys**

For public REST APIs, always use the API key to limit the access to REST APIs.

**9. Restrict HTTP Methods**

Only whitelist few of the HTTP methods supported by the API. Restrict all other HTTP methods. Make user the callee is allowed for a specific HTTP method.

**10. Validate content type**

Validate the content type of the request.

**11. Blacklist API keys/Users**

Revoke and ban the API keys or users who are voilating the policies.

**12. Audit Logs**

Create audit logs for error conditions, failures etc.

**13. Error Handling**

Do not reveal critical internal server or application details to the client. Give generic error message details only.

