# System Design Capstone

## Product Overview API

Query times optimization and performance tuning of an e-commerce API products microservice back-end

<br>

# Contributor

### Maria Kim - jsmkim09@gmail.com

<img src="README/profile.png" alt="Maria Kim" height="180"><br>

[![linkedin-shield]][maria-linkedin][![github-shield]][maria-github]

<br>

# Project Overview

In this project, a RESTful API was built to support existing legacy front-end codebase. PostgresQL was selected for the database management system to ensure data integrity and concurrency when product information is being retrieved and inventory count is updated in all references. An Express server received and sent HTTP requests with initial query times of 3s dropping to 15ms with database indexing and auto-caching techniques. Test driven development with Jest and supertest allowed for responses from the database to be validated.

This application is deployed on two AWS EC2 to separate the databse and server. Further improvements to this project will look into scalability and more intensive load testing.

<br>

# Tech Stack

- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Jest](https://jestjs.io)
- [SuperTest](https://github.com/visionmedia/supertest)

<br><br>

## Acknowledgements

- [Node](https://nodejs.org/)
- [Img Shields](https://shields.io)
- [AWS EC2](https://aws.amazon.com/ec2/?ec2-whats-new.sort-by=item.additionalFields.postDateTime&ec2-whats-new.sort-order=desc)

[maria-linkedin]: https://www.linkedin.com/in/mariakim21/
[maria-github]: https://github.com/mariaykim
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-grey?style=for-the-badge&logo=linkedin
[github-shield]: https://img.shields.io/badge/-GitHub-grey?style=for-the-badge&logo=github