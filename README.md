# KMaslov Trial Description

## Steps completed

1. Implemented a NodeJS application with Express framework for web page serving. The logic is in app.js file.

2. Implemented dockerization of the application with a multi-stage build, see Dockerfile.

3. Built and ran the image locally.

4. Implemented a CI pipeline on Travis CI platform with automatic build and deploy after git push to the master branch, see .travis.yml.

5. Established deployment of the image to Heroku, but got stuck on a problem with that.

## Further improvements

a. Solve the issue with image deployment or try another hosting.

b. Make the service scalable - now it actually can't be scaled, because it stores state of pageviews in memory.
The state should be better moved to some nosql database to be shared across multiple instances of the service.

c. Provide load-balancing of the service.
