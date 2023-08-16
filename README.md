# mod-13-ORM-e-commerce-back-end

## [![License: APACHE2.0](https://img.shields.io/badge/License:_MIT-orange)](https://opensource.org/license/mit/)

## Description
* For this project, I will build the back end for an e-commerce site. I’ll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database.
* I will make sure that my code follows industry standards and is sourced correctly.
* By building this application, it has helped me to learn information on ORM, Express.js, MySQL, Sequelize, and other info.

## User Story
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies

## Acceptance Criteria
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database

## Sources
* Dependency packages: https://www.npmjs.com 
* Validation: https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/
* sequelize methods: https://sebhastian.com/sequelize-belongstomany/
* status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses 
* RICE UNIVERSITY BOOT CAMP Activities for MySQL and ORM.
* Special thanks to my tutor Ben.

## Link to Deployed Site

There is no deployed site for this application.

## Link to Github Repository

https://github.com/douglasmarsalis/mod-13-ORM-e-commerce-back-end

## Demonstration Video

* Opening - mysql, source schema.sql, run seed, run server.js and Get
  
[Opening_mysql_source_seed_server_get.webm](https://github.com/douglasmarsalis/mod-13-ORM-e-commerce-back-end/assets/112460009/c685649a-8748-409e-bf2a-f024da2724cf)

* Get Single - categories, products, tags

[Get_single_cat_prod_tag.webm](https://github.com/douglasmarsalis/mod-13-ORM-e-commerce-back-end/assets/112460009/0c9ce7c3-25c1-451a-ad0e-4ed7b187ae6e)

* Post Put Delete - all


## License
MIT License

Copyright (c) 2023 Douglas Eric Marsalis

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
