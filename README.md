#bPol surveys - API

The application was created to learn a specific technology stack:
- backend basics
- nest.js
- graphql  
- mysql
- typeorm
- apollo server

##About
The application is used to:
- create, save in the database and process surveys
- generate personalized url for each survey
- get answers from respondents and display the results

##Project setup

1. clone repository from 
   `git@github.com:iKacperG/bpol-surveys-api.git`
   
2. run `npm install`
3. set up local database
4. run `npm run typeorm -- migration:run`   
4. set up database credentials in `ormconfig.json` file
5. run `npm run start:dev` for development environment

###Relations and real example

1. The user creates a survey in the root url by adding questions and submitting them as standalone poll <br>
This way, there is created `Survey` entity, that refers to `Question Table` <br>
   (so you've got one `Survey` to many `Question` entities relation and vice versa)
   
2. You receive answers from the respondent. Each answer becomes related with single `Question` entity, based on questionId passed
3. At root url you are able to check created surveys along with responses submitted by respondents

###Answer types

When creating the survey, you are able to choose between text and scale type. <br>
`Text` represents any text data provided by respondent <br>
`Scale` refers to 1-10 grading scale to measure level of respondent's binding to the thesis posed in the question
