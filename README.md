# Project Overview
Our web application, titled ESOO (Endangered Species of Ontario) and running at https://esoo-react.herokuapp.com/, is a site constructed with React that shows basic data surrounding species that are endangered in Ontario. The user can select which category of endangered species they would like to view, at which point a call is made to a REST API (running at https://esoo-rest-api.herokuapp.com/ and who's repository can be found at https://github.com/MeharSinghShienh/ESOO-REST-API) that interacts with a JavaScript database of information to display the names of the appropriate species.  Should the user then click on one of the species names, the app then fetches and displays the scientific name, location, endangered status, date added to the endangered species list in Ontario, and picture of the species using a GraphQL query to the REST API (the GraphQL API can be found at https://esoo-graphql.herokuapp.com/ and has it's corresponding repository located at https://github.com/MeharSinghShienh/ESOO-GraphQL). Be advised that after it has been inactive for some time, the app may take a few minutes to load and may even display an error message.  Should an error message appear, simply refresh the page and the app should appear properly. 

## How to Use
Initially, before starting the ESOO project, ensure that the corresponding REST API (found at https://github.com/MeharSinghShienh/ESOO-REST-API) and the corresponding GraphQL API (found at https://github.com/MeharSinghShienh/ESOO-GraphQL) are up and running in the background. Once that is set, you can open up the ESOO project folder and run it by using the npm start command in the terminal.

