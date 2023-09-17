import { useEffect, useState } from "react";
import { getUser } from "../api";
import TopTracks from "./TopTracks";

function User() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) handleFetch();
  }, [user]);

  const handleFetch = async () => {
    const user = await getUser();
    setUser(user);
  };

  if (user)
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row text-white items-center justify-center">
          <img
            className="rounded-full m-5 w-[150px]"
            src={user.images[1].url}
          ></img>
          <p className="text-6xl text-center title text-[96px] leading-7 font-bold ">
            {user.display_name}
          </p>
        </div>
        <TopTracks />
      </div>
    );
}

export default User;
