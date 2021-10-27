# System Design Capstone

## Maria Kim - jsmkim09@gmail.com

<img src="README/profile.png" alt="Maria Kim" height="180">&nbsp;[![linkedin-shield]][maria-linkedin]&nbsp;[![github-shield]][maria-github]

# Project Overview

In this project, a RESTful API was built to support existing legacy front-end codebase. PostgresQL was selected for the database management system to ensure data integrity and concurrency when product information is being retrieved and inventory count is updated in all references. An Express server received and sent HTTP requests with initial query times of 3s dropping to 15ms with database indexing and auto-caching techniques. Test driven development with Jest and supertest allowed for responses from the database to be validated.

This application is deployed on two AWS EC2 to separate the databse and server. Further improvements to this project will look into scalability and more intensive load testing.

<br>

# Table of Contents

- [Tech Stack](#techstack)
- [Installation](#installation)
- [API Documentation](#apidocs)
- [Acknowledgements](#acknowledgements)

<br>

# Tech Stack <a name="techstack"></a>

<table>
  <tbody>
    <tr>
      <td>Database & Server</td>
      <td>
        <img alt="ExpressJS" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
        <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
        <img alt="PostgreSQL" src="https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>
      </td>
    </tr>
    <tr>
      <td>Testing / Deployment </td>
      <td>
        <img alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
        <img alt="AWS" src="https://img.shields.io/badge/AWS%20-%23FF9900.svg?&style=for-the-badge&logo=amazon-aws&logoColor=white"/>
      </td>
     <tr>
      <td>Workflow</td>
      <td>
        <img alt="Github" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
        <img alt="Trello" src="https://img.shields.io/badge/Trello-%23026AA7.svg?&style=for-the-badge&logo=Trello&logoColor=white"/>
      </td>
    </tr>
  </tbody>
</table>
<br>

# Installation <a name="installation"></a>

1. Clone the repo

```
git clone https://github.com/mariaykim/System-Design-Capstone.git
```

2. Install dependencies

```
npm install
```

3. Create a `config.js` in your root directory

```
module.exports = {
  db: {
    user: YOUR_USERNAME,
    host: YOUR_HOST,
    database: YOUR_DATABASE,
    password: YOUR_PASSWORD,
    port: 5432
  }
};
```

4. Run schema
```
psql "dbname=YOUR_DATABASE options=--search_path=YOUR_SCHEMA" -a -f database.sql
```
5. Start the server
```
npm start
```


# API Documentation <a name="apidocs"></a>

`GET: /:id/related`

- **Description:** returns an array of related products for a given product id
- **Query Parameters:**
  <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>id</td>
     <td>integer</td>
     <td>an integer representing the product id. (required value)</td>
    </tr>
   </tbody>
  </table>

`GET: /:id/styles`

- **Description:** returns an object with the styles for a given product id
- **Query Parameters:**
  <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>id</td>
     <td>integer</td>
     <td>an integer representing the product id. (required value)</td>
    </tr>
   </tbody>
  </table>
  
 `GET: /products/:id`

- **Description:** returns an object with the product information for a given product id
- **Query Parameters:**
  <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>id</td>
     <td>integer</td>
     <td>an integer representing the product id. (required value)</td>
    </tr>
   </tbody>
  </table>
  
 `GET: /productList`

- **Description:** returns an array with all products in the database

`GET: /cart/:userToken`

- **Description:** returns an object with the cart information of a given user
- **Query Parameters:**
  <table>
   <thead>
    <tr>
     <th>Parameter</th>
     <th>Type</th>
     <th>Description</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>userToken</td>
     <td>integer</td>
     <td>an integer representing the user (required value)</td>
    </tr>
   </tbody>
  </table>

`POST: /cart`

- **Description:** adds a new product to a user's cart
- **Query Parameters:**
   <table>
    <thead>
     <tr>
      <th>Parameter</th>
      <th>Type</th>
      <th>Description</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <td>userToken</td>
      <td>integer</td>
      <td>an integer representing the user (required value)</td>
     </tr>
     <tr>
      <td>sku_id</td>
      <td>integer</td>
      <td>an integer representing the product style (required value)</td>
     </tr>
     <tr>
      <td>active</td>
      <td>boolen</td>
      <td>a boolean representing the user cart status (required value)</td>
     </tr>
    </tbody>
  </table>

## Acknowledgements

- [Node](https://nodejs.org/)
- [Img Shields](https://shields.io)
- [AWS EC2](https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)

[maria-linkedin]: https://www.linkedin.com/in/mariakim21/
[maria-github]: https://github.com/mariaykim
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-grey?style=for-the-badge&logo=linkedin
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=for-the-badge&logo=github
