import axios from "axios";

const getURL = async () => {
  const response = await axios({
    method: "GET",
    url: "https://spotify-stats-production-37fb.up.railway.app/auth/url",
  });
  return response.data;
};

const postCode = async (code) => {
  const response = await axios({
    method: "POST",
    url: "https://spotify-stats-production-37fb.up.railway.app/auth/code",
    data: {
      code: code,
    },
  });
  return response;
};

const getUser = async () => {
  const user = await axios({
    method: "GET",
    url: "https://spotify-stats-production-37fb.up.railway.app/api/user",
  });
  return user.data.user
};

const getTracks = async () => {
  const tracks = await axios({
    method:"GET",
    url:"https://spotify-stats-production-37fb.up.railway.app/api/tracks"
  })
    return tracks.data
}

export { getURL,getTracks, postCode, getUser };
