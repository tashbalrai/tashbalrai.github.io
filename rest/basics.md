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


## HTTP VERBS
GET = read only access to data.

PUT = create new resource/collection.

POST = update or create new resource/collection.

DELETE = remove existing resource/collection.

OPTIONS = Detect existing VERBS supported.

PATCH = making partial changes on existing resource.


## JWT
JSON web token is a secure and compact way of transferring information between two parties.

Compact = Can be passed in URL, in POST parameters or as a HTTP Header
Self-contained = All authentication data in selfcontained in JWT, no multiple database requests are needed.

Three parts i.e. Header, Payload, Signature formatted in the following way.

Header.Payload.Signature

Header = Type and hashing algorithem used HMAC SHA256 or RSA.
{
  "alg": "HS256",
  "typ": "JWT"
}

Payload = contains claims typically users and sometime other metadata. 3 types of claims registered, public, private

Signature = encoded header, encoded payload and a secret. e.g.:
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)

Signature is used to verify the intigrity of the message

sample JWTeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
