import api from "./api.js";

export const getPokemon = async () => {
  const { data } = await api.get("/pokemon");
  return data;
};

export const postPokemon = async (formData) => {
  const { data } = await api.post("/pokemon", formData);
  return data;
};
