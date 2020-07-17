## MakersBnB
MakersBnB is web based app, which allows any user to create an account, view a list of spaces and add a new space. 

This is our first team project as part of Makers Academy (contributors are listed below).

**User Stories**
----

```
1. As a user
   So I can sign into the app
   I would like to input my email, username and password to sign in

2. As an owner
   So that I can rent out my space
   I want to input the details of my space on a web page

3. As an owner
   So that I can view my spaces
   I would like to see the saved space on the website

4. As an owner
   So I can list another property
   I’d like to be able to add multiple spaces on MakersBnB

5. As an owner
   So I can market my space effectively
   I would like to name my space, provide a description of it & give it a price per night

6. As an owner
   So I can offer a range of dates to book
   I would like to list the available dates next to each space

7. As a booker
   So I can book a space for one night
   I would like to request a date from a list of available dates

8. As an owner
   So I can approve the date requested
   I would like to like to see the date requested and approve or reject

```

**Assumptions**
----

- Any user can book any space

- Prices are listed in GBP

- Users will host their images elsewhere


**MVC Model**
----
![MVC](https://github.com/samlandman/Makersbnb/blob/master/images/image.png)

**Wireframe**
----

![image1](https://github.com/samlandman/Makersbnb/blob/master/public/images/Screen%20Shot%202020-07-13%20at%2015.00.21%202.png)

![image2](https://github.com/samlandman/Makersbnb/blob/master/public/images/Screen%20Shot%202020-07-13%20at%2015.00.00%202.png)

![image3](https://github.com/samlandman/Makersbnb/blob/master/public/images/Screen%20Shot%202020-07-13%20at%2015.00.47%202.png)


**Thought Process**
----
We're transferring our knowledge of Ruby applications into Javascript.

Our controller is created using JS, Node & Express.
Our test environment will be in Jasmine. 

**Instructions**
----
Run:
```
npm install
```

To run the server:

```
node app.js
```

The LocalHost should be used to run this program:

```
localhost:3000
```

**Database**
----
The database is located on ElephantSQL, a cloud server. We have accessed this on our local machines through Postico & TablePlus, and linked them to our code in our sql.js file.

To view the current contents of the database, run:
```
node sql.js
```

**Contributors**
----

@samlandman

@mattybwoy

@mirimichaelson

@aravzpatel

@Dhara-95

**Follow up**
----

- We would have liked to finish user stories 7 and 8 

- Currently the request button redirects to the homepage - ideally this would send a form to owner of the space to approve/reject. 

- Currently the site doesn't allow the owner to add dates to a space, we would have liked to add this functionality 

- We would have liked to add more tests (both unit and feature tests)

- We can currently add a new space and view it, but we cannot update or delete (CRUD pattern)

- We can currently add a new user and login, however cannot update or delete (CRUD pattern)


<p align="center">
    <a href="https://https://makers.tech/">
        <img src="https://img.shields.io/badge/-created%40makers-red"
            alt="Made @ Makers"></a>
</p>
