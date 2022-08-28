# Hobby tracker 

## Brief description
This is my capstone project for Full Stack Web Development diploma program at BrainStation. 
It's a simple CRUD app that helps people keep track of various hobby projects they engage in. 
This repo contains the code for front end, while the code for the back end can be found here: https://github.com/IrinaPresnyakova/hobby-app-server

## Use Cases and Features
After signing up and logging in, a user can create a new project to document what they are currently working
on by filling in an index card with the name of the project, materials needed and some planning. 
For each individual project the user can:
- upload photos,
- write notes, 
- edit the project description,
- archive the project, 
- delete the project with all its affiliated materials (notes and photos).
 
When the project is archived, it is saved in a separate page in an abridged form (only the index card with text). From the archive page the user can:
- view each archived project in a separate window,
- unarchive the project which moves it back to Current projects page,
- delete the project.
 
There is also a Bucket list page where a user can add ideas for projects they would like to engage in at some point in their lives. While viewing this page, the user can: 
- add an idea,
- view each idea in a separate window, 
- move any idea to Current projects page,
- delete an idea.

## Tech specs
This is a React.js app (https://reactjs.org/) built in Node.js environment (https://nodejs.org/en/) with Express.js framework. It uses Cloudinary service to store pictures and MySQL (with Sequelize module) to store data. You will need to have MySQL installed and running (https://dev.mysql.com/doc/mysql-getting-started/en/), as well as have a Cloudinary account opened on Dashboard (https://cloudinary.com/documentation/dashboard_intro_tutorial).

## How to run this project on your computer

1. Clone this repo, as well as the server repo located at https://github.com/IrinaPresnyakova/hobby-app-server
2. Open both repos in your code editor and have a separate terminal running for each. 
4. Run ```npm install``` in each terminal. 
5. Start your MySQL and create a new schema, name it hobby_projects or whatever you like.
6. Create .env file in your Server folder and add the following: 
```
NODE_ENV=development
PORT=5500
//the following will include your data from a Cloudinary account found in the Dashboard:
API_KEY=[enter your Cloudinary API key]
CLOUD_NAME=[enter your Cloudinary Cloud name]
API_SECRET=[enter your Cloudinary API secret]
```
7. Configure the following file in Server folder: server/config/config.json to connect to a database. You will need to include: 
```
  "development": {
    "username": [your MySQL username in quotation marks],
    "password": [your MySQL password in quotation marks],
    "database": [use the name of the schema you created in step 5, e.g. "hobby_projects"],
    "host": "127.0.0.1",
    "dialect": "mysql"
```
8. Start your server: run ```npm start``` in your server terminal, it will run on port 5500.
9. Start your front end: run ```npm start``` in your front end terminal. The browser will open to show the home page from where you can sign up and login. 

## Connect with me!
I would love to hear your feedback! Please try using my app and let me know what you think.
https://www.linkedin.com/in/irina-presnyakova/
