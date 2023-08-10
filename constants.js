exports.constants = {
    BAD_REQUEST : 400,
    UNAUTHORIZED:401,
    FORBIDDEN:403,
    NOT_FOUND:404,
    SERVER_ERROR:500,
}

// Notes on Http codes 

// URI = Unifrom Resource Identifier 
/* http response status code indicate whether a specific http request has been
 successfully completed

 1.Infromational responses = 100-199
 2.Successful responses = 200-299
 3.Redirection messages = 300-399
 4.Client Error Responses = 400-499
 5.Server Error Responses = 500-599 

 Informational Responses 
 100 = continue
 101 = switching Proctocols
 102 = processing
 103 = Early Hints

 Successfull Responses :
 200 = ok
 201 = created
 202 = Accepted
 203 = Non-Authoritative Information
 204 = No Content 
 205 = Reset Content
 206 = Partial Content
 207 = Multi-Status 
 208 = Already Reported
 226 IM Used

 Redirection messages 
 300 = Mulitple Choice
 301 = Moved Permanetly
 302 = Found
 303 = See other
 304 = Not Modified
 305 = Use proxy (it has deprected)
 306 = unused (no loner used )
 307 = Temporary Redirect 
 308 = Permanent Redirect

 Client Error responses
 400 = Bad Request 
 401 = Unauthorized
 402 = Payment Required 
 403 = Forbidden
 404 = Not Found 
 405 = Methos Not Allowed
 406 = Not Acceptable
 407 = Proxy Authentication Required
 408 = Request Timeout
 409 = Conflict 
 410 = Gone 
 411 = Length Requierd 
 412 =Precondition Failed
 413 = Payload Too Large
 414 = URI To Long 
 415 = Unsupported Media Type
 416 = Range Not Satisfiable
 417 = Expection Failed
 418 = I'm a teapot 
 421 = Misdirected Request
 422 = Unprocessable Content
 423 = Failed Dependecy
 425 = Too Early 
 426 = Upgreade Required
 428 = Precondtion Required
 429 = Too Many Requests
 431 = Request Header Fields Too Large
 451 = Unavailable For Legal Reasons

 Server Error Response
 500 = Internal Server Error
 501 = Not Implemented
 502 = Bad Gatway
 503 = Service Unavailable
 504 = Gatway Timeout
 505 = HTTP Version Not Supported
 506 = Variant Also Negotiates
 507 = Insufficient Storage
 508 = Loop Detected
 510 = Not Extended
 511 = Network Authentication Required
*/