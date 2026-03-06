import { useForm } from "react-hook-form";

const PokemonSearchForm = () => {
  const { register } = useForm();

  return (
    <form className="flex gap-4 items-center justify-center">
      <input
        className="shrink-0 w-70 border border-gray-500 rounded-full py-2 px-4"
        type="text"
        placeholder="search pokemon"
        {...register("search")}
      />
    </form>
  );
};

export default PokemonSearchForm;
