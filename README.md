# Shortster
API used for shortening URLs

This project uses Node.js to set up the backend API calls.

Instructions:

-Once the repository is downloaded, download Node is you haven't already here: https://nodejs.org/en/download/
-In your temrinal, while inside the project directory, run the "npm install" command to install needed packages.
-Run the "npm start" command in order to start the backend on your local machine.

Note: Due to the tiny and temporary scale of this project, a simple array is used to story data in memory, and anything stored there will be deleted when the server is stopped. A larger scale would obviously require a database.

Endpoints (for local machine):

localhost:3000//shorten?url=desiredURL&name=desiredName
-The url query should be the full url that will be shortened.
-The name query is optional. If left out, the backend with generate a code for the user, or the user can specify one they want. User generated codes must be at least 4 characters and can contain uppercase, lowercase, and/or numbers.
-Will return an error message if name doesn't meet requirements or already exists.

localhost:3000//:shortcode
-The :shortcode parameter is variable and should be an existing shortcode.
-Will redirect the user to the url associated with the shortcode.
-Will return an error message if the shortcode does not exist.

localhost:3000/:shortcode/stats
-The :shortcode parameter is variable and should be an existing shortcode.
-Will show statistics for the shortcode including the associated URL, the date it was created, the last time it was used, and how many times it was used.
-Will return an error message if the shortcode does not exist.

Testing:

-In order to run tests, mocha and supertest need to be installed in the directory using "npm install mocha supertest"
-Then run "mocha tests/testFileName" to run the tests.


