import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

const PokemonSearchForm = ({ onSearch }) => {
  const { register, watch } = useForm();
  const searchTerm = watch("search", "");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, onSearch]);

  return (
    <form className="flex gap-4 items-center justify-center">
      <input
        className="shrink-0 w-70 border border-gray-500 rounded-full py-2 px-4"
        type="text"
        placeholder="search pokemon"
        {...register("search")}
      />
      <FaSearch cursor="pointer" />
    </form>
  );
};

export default PokemonSearchForm;
