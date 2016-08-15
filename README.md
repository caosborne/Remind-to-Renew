# Auth0 + NodeJS Seed
#Running the example
In order to run the example you need to have npm and NodeJS installed.

Now, run `npm install` to install the dependencies.

Visit [https://manage.auth0.com/login](https://manage.auth0.com/login) and create a new client as a regular web app. This should give you your authentication keys.

You'll need to create a file named `.env` in the directory and set the values like the following, so the app will work:

````bash
# .env file
AUTH0_CLIENT_SECRET=myCoolSecret
AUTH0_CLIENT_ID=myCoolClientId
AUTH0_DOMAIN=myCoolDomain
AUTH0_CALLBACK_URL=http://localhost:3000/callback
DB_CONNECT=myMongoConnectionString
````

Once you've set those 5 environment variables, just run `nodemon` and try calling [http://localhost:3000/](http://localhost:3000/)
