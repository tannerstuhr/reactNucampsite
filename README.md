# Nucampsite

This web application is a mock campsite website, designed to allow users to view campsites, rate campsites, and submit feedback.

### `db.json`

A locally run server that holds information about the campsites, comments, and feedback. 
Start Command: json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000

## `Campsite Info Component`

This component pulls information from a locally hosted json server, and displays the information about each campsite.

## `Submit Comment`

This button when viewing a campsite will allow users to rate a campsite and the information will be stored in the db.json server, and then displayed on the campsite info page.


## `Contact Component`

Allows user to contact through a form.
Info gets stored to db.json 

## `Loading Component`

Is used to practice Redux Middleware and simulate the response time of a server request.

