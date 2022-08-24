//NOTE importing the required libraries
const express = require("express");
const faker = require("faker");

const app = express();
const port = 8000;

// we can create a function to return a random / fake "Product"
/*   User Object
        password
        email
        phoneNumber
        lastName
        firstName
        _id

    Company Object
        _id
        name
        address
            street
            city
            state
            zipCode
            country
  */
//user obj
const createUserObject = () => ({
  password: faker.internet.password(),
  email: faker.internet.email(), 
  phoneNumber: faker.phone.phoneNumber(),
  lastName: faker.name.lastName(), 
  firstName: faker.name.firstName(),
  _id: faker.datatype.uuid(),
});

//company obj
const createCompanyObject = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
  },
});
// res is shorthand for response
app.get("/api/user/new", (req, res) => {
  const newUser = createUserObject();
  res.json(newUser);
});

//new company init, and returned as json
app.get("/api/companies/new", (req, res) => {
  const newCompany = createCompanyObject();
  res.json(newCompany);
});

//both user and company init and returned as json
app.get("/api/user/company", (req, res) => {
  const newCompany = createCompanyObject();
  const newUser = createUserObject();
  const newUserCompany = {
    user: newUser, 
    company: newCompany,
  };
  res.json(newUserCompany);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

