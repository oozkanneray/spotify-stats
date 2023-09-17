import { useEffect, useState } from "react";
import { getURL } from "../api";

function Login() {
  const [url, setUrl] = useState();

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const fetchURL = await getURL();
    setUrl(fetchURL);
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="text-white text-xl flex flex-col justify-center items-center ">
        <p>This app includes your spotify stats using with Spotify API.</p>
        <p>We are not collect your data.</p>
        <p>Already this version is first version of this app</p>
        <p>Everything can be updated any time</p>
      </div>
      {url ? (
        <button className="bg-green-500 w-[200px] h-[60px] rounded-xl mt-10">
          <a href={url} className="text-[25px] text-white ">
            Login To Spotify
          </a>
        </button>
      ) : (
        <div className="flex justify-center items-center bg-green-500 w-[250px] h-[60px] rounded-xl text-[25px] text-white ">
          something wrong!
        </div>
      )}
    </div>
  );
}

export default Login;
