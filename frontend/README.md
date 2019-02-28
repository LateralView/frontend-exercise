## A React.js Skeleton born with Redux and Saga on mind

# spotify-exercise

## A Frontend developer exercise

This exercise is made to test your abilities to solve a typical frontend issue.

### Context

Basically, you'll need to connect to spotify api to be able to do album searchs,
then from our backend show the current comments, allowing the user to put a comment
on a specific album. 
The application should be fully responsive.

This is a base frontend project in which we added a little backend that communicates with
Spotify API and handles the comments. There are some reducers, Sagas and components not
related with the scope of this project, but is an example of how we implement the flow.

### How to run

#### Backend
1. Run mongod service (install MongoDB if it's not installed on your machine)
2. Go to server directory `cd server/`
3. Start the server `node index.js`
   
#### Frontend
From the root directory:

1. run `npm install` to install project dependencies.
2. run `npm start` to run the front-end.

### Endpoints
The backend exposes the following endpoints:

- GET /search?q=:searchPayload    -> Returns a filtered list
- GET /album/:albumId             -> Returns album details
- GET /comments/:albumId          -> Returns album comments
- POST /comments                  -> Create a new comment
    - Body: { albumId: String, email: String, text: String }

### Spotify credentials
To comunicate to Spotify through our backend, you must have a Spotify access token. To get this access token, login in:

https://developer.spotify.com/dashboard/

- Create an App and follow the steps
- After creating the App, a `client_id` and a `client_secret` will be provided

Once you have the keys, create `.env` file in the root directory with the following env variables:

```
SPOTIFY_CLIENT_ID=<client_id>
SPOTIFY_CLIENT_SECRET=<client_secret>
```

### Designs

Ask for permissions of the designs, [Zeplin](https://zeplin.io/) is required.
There is a [Preview of the Zeplin Design](https://scene.zeplin.io/project/582b01162ad47b3e76efd0e7)
