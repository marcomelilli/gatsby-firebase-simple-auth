
## Work in Progress ##

# Gatsby Firebase Authentication

This is a simplified demo to show how an authentication workflow is implemented in Gatsby.

The short version is:

- Gatsby statically renders all unauthenticated routes as usual
- Authenticated routes are whitelisted as client-only
- Logged out users are redirected to the login page if they attempt to visit private routes
- Logged in users will see their private content
