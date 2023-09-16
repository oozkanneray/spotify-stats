import SpotifyWebApi from "spotify-web-api-node";
import dotenv from "dotenv";

dotenv.config();

var scopes = [
  "user-top-read",
  "user-read-private",
  "user-read-email",
  "playlist-read-collaborative",
  "playlist-read-private",
  "user-read-recently-played",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-playback-position",
  "user-library-read",
];

const state: string = process.env.STATE || "";
const showDialog = true;

const spotifyapi = new SpotifyWebApi({
  redirectUri: process.env.REDIRECT_URL,
  clientSecret: process.env.CLIENT_SECRET,
  clientId: process.env.CLIENT_ID,
});

function refreshSpotifyToken() {
  spotifyapi.refreshAccessToken().then(
    function (data) {
      spotifyapi.setAccessToken(data.body["access_token"]);
    },
    function (err) {
      console.log("Could not refresh access token", err);
    }
  );
}

export { scopes, state, showDialog, spotifyapi, refreshSpotifyToken };
