function Logo() {
  return (
    <div className="border-b-2 border-white p-2">
      <div className="flex items-center text-green-500">
        <img
          className="w-[75px]"
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
          alt=""
        />
        <div className="m-3 text-4xl font-extrabold">Spotify Stats</div>
      </div>
    </div>
  );
}

export default Logo;
