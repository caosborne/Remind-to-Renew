# Remind 2 Renew (Final Project)
##The App
This app allows users to add items to a tracker that they need to renew or be reminded about. When a user adds an item to their tracker, a item is created that sets an alert date that is chosen and on the alert date an email will be sent to the user. The user can provide all information needed to make the renew process easier for them when the time comes.

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
