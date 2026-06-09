import { usePokemon } from '../context/PokemonContext';

import { pokemonTypeColors }
    from '../utils/PokemonColors';

import React, { useState } from 'react';

export const ContentHome = () => {

    const { pokemons } = usePokemon();

    const [search, setSearch] = useState("");

    const filteredPokemons = pokemons.filter((pokemon) =>

        pokemon.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <div style={{padding: `2rem`}}>

            <input

                type='text'

                placeholder='Buscar pokemon...'

                value={search}

                onChange={(e) =>
                    setSearch(e.target.value)
                }

            />
            <div className='pokemon-container'>

                {filteredPokemons.map((pokemon) => {

                    const color1 =
                        pokemonTypeColors[pokemon.types[0]];

                    const color2 =
                        pokemonTypeColors[pokemon.types[1]]
                        || color1;

                    return (

                        <div

                            key={pokemon.id}

                            className='pokemon-card'

                            style={{
                                background:
                                    `linear-gradient(135deg, ${color1}, ${color2})`
                            }}

                        >

                            <img
                                src={pokemon.image}
                                alt={pokemon.name}
                            />
                            <div className='pokemon-name'>
                                <h3>{pokemon.name}</h3>
                            </div>


                        </div>

                    );

                })}

            </div>
        </div>
    );
};