Languages
For this assignment you need to create a CRUD application for a language dashboard.
https://login.codingdojo.com/m/314/5657/37404

<img src="Output/08_07_languages.png"/>
● name: Min char 2, Max char 20

● creator: Min char 2, Max char 20

● currentVersion: Cannot be empty

language wireframe

Topics:
● Data Persistence

● CRUD

Tasks:
● The GET /languages route should show a table of all the languages with links to edit and delete the languages; also include a form for creating new languages.
<img src="Output/Capture.PNG"/>
● The POST /languages routes should create a language.
<img src="Output/Capture-1.PNG"/>
<img src="Output/Capture-2.PNG"/>
● The GET /languages/{id} route should return the specific language and details.
<img src="Output/Capture-3.PNG"/>
● The GET /languages/{id}/edit route should show the edit page to of a specific language
<img src="Output/Capture-4.PNG"/>
● The PUT /languages/{id} route should should update a language

● The DELETE /languages/{id} route should delete the specific language at that id.

● All routes should be validated and show errors.

● Data must persist across reloads in a MySQL database.
