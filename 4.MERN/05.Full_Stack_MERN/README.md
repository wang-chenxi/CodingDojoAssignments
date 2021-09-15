# Steps to create full stack MERN app

1. create the folder **name of app**
2. in the folder **name of app**, create **server** folder
3. in the **server** folder, run the ternimal with command:
   `npm init -y`
   `yarn add express mongoose cors`
4. create **index.js**, **config** folder=>**mongoose.config.js**, **models** folder with **name.model.js** files, **controllers** folder with **name.controller.js** files, **routes** folder with **name.route.js** files, and below is the template of mongoosee config:

```
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/your_db_name", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO FULL MERN DEMO DB"))
    .catch(err => console.log("ERROR: ", err))

```

5. back to parent folder **name of app**, run the ternimal with command:
   `npx create-react-app client`
6. in the **client** folder, run the ternimal with command:
   `yarn add react-router-dom axios`
7. terminal at **client**=>boost the front-end server with `yarn run start`
8. terminal at **server**=>boost the back-end server with `nodemon index.js`

Happy Hack!
