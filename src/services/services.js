import api from "./api.js";

export const getPokemon = async (search = "") => {
  const { data } = await api.get("/pokemon");

  if (!search) return data;

  const query = search.trim().toLowerCase();
  return data.filter((p) => p.name.toLowerCase().includes(query));
};
