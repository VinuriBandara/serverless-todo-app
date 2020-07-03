# serverless-todo
 Serverless demo
 
 ## Run to-do app
 Boilerplate for the [angular to-do application](https://github.com/sitepoint-editors/angular-todo-app)
 
 Change directory to todo-app and run ng serve. View result on http://localhost:4200
 
 When ready to build the application run ng build.
 
 ## Deploying service
 Change directory to SLS1 and run sls deploy. 
 
 Get the API URL and paste it in the api.service.ts in the place of environment.apiUrl.
 
![Alt text](./images/deploy.png?raw=true "Deploy service")
 
 ## Host on Amazon S3
 Enable static web hosting in your aws S3 bucket. 
 
 Add the /dist folder content to the S3 bucket and host the web applcation. 
