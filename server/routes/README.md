standard returns indicating the state of the current user's session shall be as follows.

the session state will be indicated by a field named "session" in every returning object

"bad"-there is no session or it is in some way invalid. Usually this is a good time to redirect to the login screen
"valid"-the session is valid. proceed as if the user is logged in
"denied"- there is a user session but the user does not have priviledges to that part of the site
