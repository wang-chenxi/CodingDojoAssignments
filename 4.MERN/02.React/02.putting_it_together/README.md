Hi there, I try to put every piece of assignment together since creating new react project takes huge resource. Thank you for your understanding.

# 1.Putting it Together

https://login.codingdojo.com/m/130/6235/43911

Using the same assignment as the Prop It Up assignment, create a birthday button that will increase one person's age by one.
<br/>
<img src="Capture.PNG"/>

================================================

# 2. Big Inversion

https://login.codingdojo.com/m/130/6335/50225

Redo the Prop It Up assignment and turn the class components into functional components.

Create a component called PersonCard that accepts the following props:

firstName
lastName
age
hairColor
Then, display four PersonCard components that show four different people, using props.
<br/>
<img src="Capture-2.PNG"/>

# 3. Hook Form

https://login.codingdojo.com/m/130/6335/45691

Create a form like the following wireframe with a React Component and hooks. Then, show in real time, the data that is being inputted into the form below
<br/>
<img src="Capture-3.PNG"/>

# 4. More Forms

https://login.codingdojo.com/m/130/6335/46795

Using the previous assignment "Hook Form", add error messages.

If the First Name or Last Name is less than 2 characters, output an error message saying that field must be at least 2 characters.
If the email is less than 5 characters, output an error message saying the field must be at least 5 characters.
The passwords must match and be at least 8 characters.
These messages can appear right when you render the page, and will disappear in real time.

Hint: Use state and conditional rendering.
<br/>
<img src="Capture-4.PNG"/>

# 5. Todo List

https://login.codingdojo.com/m/130/6335/48095

Ah, the todo list! A ubiquitous project for any respectable JavaScript framework. Your job is to create a small React application to store and modify a list of tasks. Each task will have a text string as well as a completed property, which will be set to false initially. As you check off items, they should appear slashed out on the page. Using what you know about state and iterating through lists, render a list of items, and give the user the option to remove each item and add new ones. There are different ways to implement the remove function. One way to do it is using the built-in filter method. Filter returns a new array when invoked and is a great way to stay true to the functional nature of React.

Hint: When updating the state, make sure to send in a brand new object or array; otherwise React won't update the view.

<br/>
<img src="Capture-5.PNG"/>

# 6. Tabs

https://login.codingdojo.com/m/130/6335/48418

Develop a tabs component that will take in an array of items. Each item will have a label and a content property. When you click on each individual tab header, it should change the state of the tabs so that the correct content is displayed.

<br/>
<img src="Capture-6.PNG"/>

# 7. Navbar context

https://login.codingdojo.com/m/130/6335/45693

Create a React project that has a navbar with a message that says the user's name ("Hi, _some_name_here_!"). In the body of the page, have an input where the user can dynamically change the name in the navbar. You will need to create the following components:

Form.js: This component should actually hold the input field.
FormWrapper.js: This component should only wrap the Form Component as its child. This is to illustrate that you can use nested components with context without passing down props.
Navbar.js: This component should be your navbar which contains the greeting.
Wrapper.js: This component should wrap the Navbar and the FormWrapper components (and will access useState).
You will also need to create the context object.

Your App.js function should look something like this (note that Navbar and FormWrapper don't take in any props):
