# spotify-exercise

## A Frontend developer exercise

This exercise is made to test your abilities to solve a typical frontend issue.

### Context

Basically, you'll need to connect to spotify API to be able to do album searches,
then from our backend show the current comments, allowing the user to put a comment
on a specific album. 
The application should be fully responsive.

This is a base frontend project in which we added a little backend that communicates with
Spotify API and handles the comments. There are some reducers, Sagas and components not
related with the scope of this project, but it serves as an example of how we use some components
and comunicate with a backend.

There are two main directories: `backend` and `frontend`. The exercise is focused on
`frontend` project. You'll just have to run `backend` (with proper envs) so the front
is able to access to needed endpoints in order to comunicate with Spotify without
further configuration.

### How to run

#### Backend
1. Run mongod service (install MongoDB if it's not installed on your machine)
2. Go to backend directory `cd backend/`
3. Install dependencies: `npm install`
3. Start the server `node index.js`
   
#### Frontend
1. Go to frontend directory `cd frontend/`
1. Run `npm install` to install project dependencies.
2. Configure env vars with spotify keys (see below).
3. Run `npm start` to run the front-end.

### Endpoints
The backend exposes the following endpoints:

- GET /search?q=:searchQuery      -> Returns a filtered list
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
There is a [Preview of the Zeplin Design](https://zpl.io/b639y3g)
