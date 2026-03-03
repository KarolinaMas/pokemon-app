import api from "./api.js";

export const getPokemon = async () => {
  const { data } = await api.get("/pokemon");
  return data;
};
