import express from "express";
import { spotifyapi } from "../utils/spotifyapi";

const router = express.Router();

router.get("/all", async (req, res) => {
  try {
    const user = await spotifyapi.getMe();
    const userPlaylist = await spotifyapi.getUserPlaylists(user.body.id);
    const getMyTracks = await spotifyapi.getMyTopTracks({ limit: 50 });
    const getMyArtist = await spotifyapi.getMyTopArtists();

    res.status(200).json({
      user: user.body,
      playlist: userPlaylist.body,
      topTracks: getMyTracks.body,
      topArtist: getMyArtist.body,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/tracks", async (req, res) => {
  try {
    const topTracks = await spotifyapi.getMyTopTracks({ limit: 50 });
    res.status(200).json(topTracks.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/artist", async (req, res) => {
  try {
    const topArtist = await spotifyapi.getMyTopArtists();
    res.status(200).json(topArtist.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/playlist", async (req, res) => {
  try {
    const user = await spotifyapi.getMe();
    const topTracks = await spotifyapi.getUserPlaylists(user.body.id);
    res.status(200).json(topTracks.body);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/user", async (req, res) => {
  try {
    const user = await spotifyapi.getMe();

    res.status(200).json({
      user: user.body,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

export default router;
