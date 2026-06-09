import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

import { getPokemons } from "../services/PokemonServices";

const PokemonContext = createContext();

export function PokemonProvider({ children }) {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchPokemons() {

      try {

        const data = await getPokemons();

        setPokemons(data);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }

    }

    fetchPokemons();

  }, []);

  return (

    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
        error
      }}
    >

      {children}

    </PokemonContext.Provider>

  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}