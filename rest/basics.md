## REST
REST architecture uses existing HTTP protocol and is based on three entities.

**1. Resources**
A resource is identified using a URI. e.g. /users, /users/234

**2. HTTP Verbs**
These are the actions that are taken on resources. These verbs are for example:
- GET = Read only access to data
- PUT = Create a new resource/collection.
- POST = Update or create resource/collection.
- DELETE = Remove the resource
- OPTIONS = Detect existing supported existing verbs.
- PATCH = Make partial changes to existing resources.

**3. Representation**
Resource can be represented in different formats e.g.: JSON, XML etc

## JWT
JSON web token is a secure and compact way of transferring information between two parties.

**1. Compact** Can be passed in URL, in POST parameters or as a HTTP Header
**2. Self-contained** All authentication data is self-contained in JWT, no multiple database requests are needed.

### Parts of JWT 

1. Header 
2. Payload 
3. Signature 

Formatted in the following way.

**Header.Payload.Signature**

**Header** 
Header contain type and hashing algorithem used HMAC SHA256 or RSA.
{
  "alg": "HS256",
  "typ": "JWT"
}

**Payload**
Payload contain claims typically users and sometime other metadata. 3 types of claims registered, public, private

Signature = encoded header, encoded payload and a secret. e.g.:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)

Signature is used to verify the intigrity of the message

## HTTP Status Codes

### 2XX Success

**200 OK** 

Request has succeeded.

GET = respond with message body.

HEAD = respond with headers not including message body.

POST = respond with entity described or result of the operation with message body.

TRACE = respond with request message body.


**201 Created** 

Request has fulfilled and a new resource created and URI(s) of new resource set in Location header. Response message body may or may not be set.

**202 Accepted**

Request accepted for process by some other process. But is not guaranteed to run by other process. Used in Async operations.

The 202 response is intentionally non-committal. Its purpose is to allow a server to accept a request for some other process (perhaps a batch-oriented process that is only run once per day) without requiring that the user agent's connection to the server persist until the process is completed.

It should return a either a pointer to check the status of the request or estimated time when the request will complete.

**204 No Content**

Request has fulfilled but do not have any content to return.

### 3XX Redirection

**301 Move Permanently**

Requested resource has been assigned a new permanent URI. Response should include new URI in Location header field and should contain content hypertext with hyperlink to the new URI.

If requested with HEAD then no message body.

**304 Not Modified**

Resource has not been modified since last access. MUST NOT contain a message body.

### 4XX Client Error

**400 Bad Request**

The request cannot be fulfilled due to bad syntax.

**401 Unauthorized**

Error code response for missing or invalid authentication token.

**403 Forbidden**

The request was a legal request, but the server is refusing to respond to it. Unlike a 401 Unauthorized response, authenticating will make no difference.

**404 Not Found**

The requested resource not found on the server.

**405 Method Not Allowed**

HTTP verb sent in the Request-Line is not allowed on resource URI.

**429 Too Many Requests**

Rate limiting voilation. Client sent too many requests.

### 5XX Server Error

**500 Internal Server Error**

The server encountered an unexpected condition which prevented it from fulfilling the request.




