const express = require("express");
//to correctly use faker, look at the two documents:
// https://www.npmjs.com/package/react-fakers
//https://github.com/Marak/faker.js/issues/179
const faker = require("faker");

const app = express();
const port = 8000;
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();

    }
}

console.log(new User());

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            // street
            address: faker.address.streetAddress(),
            // city
            city: faker.address.city(),
            // state
            state: faker.address.state(),
            // zipCode
            zipCode: faker.address.zipCode(),
            // country
            country: faker.address.country()
        }
    }
}

console.log(new Company());


//routes
// create a new user
app.get("/api/users/new", (req, res) => {
    res.json(new User());
});
//create a new company
app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});
//create a new user and new company
app.get("/api/user/company", (req, res) => {
    res.json({ user: new User(), company: new Company() });
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));