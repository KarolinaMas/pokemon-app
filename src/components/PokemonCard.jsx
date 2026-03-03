import { useState } from "react";
import { FaHeartbeat } from "react-icons/fa";

const PokemonCard = ({ imgUrl, name }) => {
  const [hp] = useState(() => Math.floor(Math.random() * 100) + 1);
  return (
    <div className="border border-gray-500 rounded-2xl flex flex-col items-center justify-center p-4">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
      <div className="flex items-center gap-3">
        <FaHeartbeat color="red" />
        <p>{hp} hp</p>
      </div>
    </div>
  );
};

export default PokemonCard;
