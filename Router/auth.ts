import express from "express";
import { spotifyapi,scopes,state,showDialog } from "../utils/spotifyapi";


const router = express.Router();


router.post("/code", async (req, res) => {
  const code = await req.body.code;
  console.log(code);
  await spotifyapi
    .authorizationCodeGrant(code)
    .then((response) => {
      console.log(response.body.access_token);
      spotifyapi.setAccessToken(response.body.access_token);
      spotifyapi.setRefreshToken(response.body.refresh_token);
    })
    .catch((err) => console.log(err));
});

router.get("/url", (req, res) => {
  const url = spotifyapi.createAuthorizeURL(scopes, state, showDialog);
  res.send(url);
});

export default router;
