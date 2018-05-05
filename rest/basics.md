## REST
Resource identification through URI e.g. /create/account, /list/user/234

Uniform interface with HTTP verbs such as GET, POST, PUT, DELETE

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
