# starwars(Framework used : AngularJS 1.6)
How to start the project
1.  Before starting the project please verify that machine should have these dependencies :
	1.1 NodeJS (NPM) - https://nodejs.org/en/download/
	1.2 After installation of node use this command to install Bower : npm install -g bower
	1.3 Then install GIT - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
	1.4 If you have already install these dependecies please check their version and update them to the latest stable version.
  
2.  Now clone or download the repository using - git clone https://github.com/aaarpit2/starwars.git
3.  Open the terminal and redirect to the folder when project has been cloned.
4.  Now give this command - npm start, first time it will take little time as it will install all require dependencies from internet.
5.  After all installation it will start the application on port 8000, so just go to the browser and open this url : http://localhost:8000, it will open the application and redirect to the default login page.


https://scotch.io/tutorials/testing-angularjs-with-jasmine-and-karma-part-1

Karma Setup

npm install karma karma-jasmine jasmine-core karma-chrome-launcher --save-dev


npm install -g karma-cli

npm install angular angular-ui-router angular-mocks --save-dev

karma init

Example : 
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
    ],
    exclude: [
    ],
    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}