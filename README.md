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

