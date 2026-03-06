import { useForm } from "react-hook-form";
import { postPokemon } from "../services/services";

const PokemonAddForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (formData) => {
    const response = await postPokemon(formData);
    return response;
  };

  return (
    <form className="flex gap-4 mb-6" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border"
        placeholder="name"
        type="text"
        {...register("name", { required: "Pokemon name is required." })}
      />
      <input
        className="border"
        type="text"
        {...register("hp")}
        placeholder="hp"
      />
      <input
        className="border"
        type="text"
        {...register("img", { required: "Image url is required." })}
        placeholder="url"
      />
      <input className="border" type="text" {...register("backImgUrl")} />
      <button className="bg-gray-300 px-3 py-1.5">Submit</button>
    </form>
  );
};

export default PokemonAddForm;
