standard returns indicating the state of the current user's session shall be as follows.

the session state will be indicated by a field named "session" in every returning object

"user"-there is no session or it is in some way invalid. Usually this is a good time to redirect to the login screen
"admin"-the session is valid. proceed as if the user is logged in

the following routes are used for the following pages.
