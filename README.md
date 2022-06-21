# Create a simple users application using useReducer Hook 
* Initial features 
* A list of of users 
* the ability to create user 
* the ability to delete users

## Principles CRUD

* APP.js => UserList.js => User.js

* state management

* Details page which we will need to share the state between it and the UserList.js 

* based off the previous info we will store our users within a context

* everything starts via an action (user click / interaction, fetching new info ) 

* then through the action we call a reducer 

* then the reducer decides what needs to be done based on the action.type 

* then a new state is generated
