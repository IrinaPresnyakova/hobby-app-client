July 28, 2022

Starting setting up the routes! 

Some realizations: App.js contains all the different routes = URLs that will be seen in the address field. So each one will correspond to a page saved in Pages: 
- Home page
- Current projects page
- Bucket list
- Archive
- About

Then we have components like Header, Footer, Form, etc. 

What about edit and add??? 
Response from Niko: "Hey Irina, that's up to you - pages and components are an organizational method rather than a guideline, because everything compiles down to one page, 'pages' are just a concept with SPA web apps. What you should do is make sure you logically group things into pages based on what fits together as well as what makes sense with your UI"

----

Checking routes with Postman
.get("http://localhost:5500/") - returns my message that page is not found
.get("http://localhost:5500/current") - returns an array with objects, each of a project

--- 
July 28, 2022
Lost a bit - where to start? Build a database? Learn Prisma? Do a tutorial on Knex? Or one on connecting server to a DB? Or just start working on my own thing??? 

July 30, 2022
OK so I found an amazing tutorials on a CRUD app! Coded along one, now going through the second one with my capstone opened. 
Bit Q today: how to save lists in a database... Niko: "it would be multiple rows in a table, with a key field that connects all of the rows together. Each row would have a unique primary key, but there should be a secondary key that connects the rows together else you would not be able to know which rows are part of the list"

OK i will code it as TEXT for now and will watch a tutorial later on :)

July 31, 2022
Moving along nicely, database accepts data entered from Postman, so next  moving to the front end to set up the form for entering the data

Good progress today! Front end picks up data from DB and shows it on the page. Need to resolve the issue with the key thing... "Warning: Each child in a list should have a unique "key" prop."
--> start with this tomorrow!

August 1, 2022
I think I resolved the key issue.
Taylan gave me a great idea for a name for my project: HobScotch, like hopscotch. I kind of like it, will be a working title for now. 
Today working through the next tutorial to get ideas on form validation. Also started some scss. 
OK doing great, a form is ready and hooked to DB, basic validation is done, too. Exciting. 

Issues: 
1. Warning: Received `true` for a non-boolean attribute `button-wrapper`.
2. The key thing is acting up again, need to look at it closely.
