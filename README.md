# Hazard-Watch
 Oregon State University Capstone Project

### DOCUMENTATION
Lengthier project documentation is located in the "docs" folder where you can find our handoff_docs.md and handoff_docs.pdf files.  We left both files, so you can choose your own adventure.

### Public Hosting
The Hazard Watch Website is currently publicly hosted using Google Cloud Web Hosting Servicies through the following link, 
https://scpremo.github.io/Corvallis-Hazard-Watch/
github pages sometimes doesnt fully load it so you mgiht need to refresh once


#### Posting Hazards
To post a hazard the user must be logged in and authenticated on the website. Login/authentication services are hosted using Auth0 which provides handling for login/logout/authentication and signup features.
Once the user is logged in, simply click anywhere on the map where the hazard is located, fill out the information and click submit. The Hazard will then be publicly visible and stored in our backend database hosted through Supabase.

### Local Hosting
The Hazard Watch Website can be locally hosted on your machine. Simply clone the repository to your local either through Github Desktop or running the command "gh repo clone CGA15/Corvallis-Hazard-Watch" 
Once the Repository is cloned run "npm run build" and the website will begin running on localhost:8000.
in order to run you will need to set environment variables 
process.env.SUPABASE_KEY
process.env.OPEN_WEATHER_KEY
