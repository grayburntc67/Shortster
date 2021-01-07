# Shortster
API used for shortening URLs

This project uses Node.js to set up the backend API calls.

<h3>Instructions:</h3>

-Once the repository is downloaded, download Node if you haven't already here: https://nodejs.org/en/download/<br/>
-In your terminal, while inside the project directory, run the "npm install" command to install needed packages.<br/>
-Run the "npm start" command in order to start the backend on your local machine.<br/>

Note: Due to the tiny and temporary scale of this project, a simple array is used to story data in memory, and anything stored there will be deleted when the server is stopped. A larger scale would obviously require a database.<br/>

<h3>Endpoints (for local machine):</h3>

localhost:3000//shorten?url=desiredURL&name=desiredName<br/>
-The url query should be the full url that will be shortened.<br/>
-The name query is optional. If left out, the backend with generate a code for the user, or the user can specify one they want. User generated codes must be at least 4 characters and can contain uppercase, lowercase, and/or numbers.<br/>
-Returns the code that was created.
-Returns an error message if the user created code doesn't meet requirements or already exists.<br/>

localhost:3000//:shortcode<br/>
-The :shortcode parameter is variable and should be an existing shortcode.<br/>
-Redirects the user to the url associated with the shortcode.<br/>
-Returns an error message if the shortcode does not exist.<br/>

localhost:3000/:shortcode/stats<br/>
-The :shortcode parameter is variable and should be an existing shortcode.<br/>
-Returns statistics for the shortcode including the associated URL, the date it was created, the last time it was used, and how many times it was used.<br/>
-Returns an error message if the shortcode does not exist.<br/>

<h3>Testing:</h3>

-In order to run tests, mocha and supertest need to be installed in the directory using "npm install mocha supertest"<br/>
-Then run "mocha tests/testFileName" to run the tests.
