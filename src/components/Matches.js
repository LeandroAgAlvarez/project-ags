import React from 'react';

import { usePokemon }
  from '../context/PokemonContext';

export const Matches = () => {

  const {
    pokemons,
    loading,
    error
  } = usePokemon();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  function generateRandomHour() {

    const hour =
      Math.floor(Math.random() * 24)
        .toString()
        .padStart(2, "0");

    const minutes =
      Math.random() > 0.5
        ? "00"
        : "30";

    return `${hour}:${minutes}`;
  }

  function generateRandomDate() {

    const start =
      new Date("2026-06-12");

    const end =
      new Date("2026-12-31");

    return new Date(

      start.getTime() +

      Math.random() *
      (end.getTime() - start.getTime())

    );
  }

  const matches = [];

  for (
    let i = 0;
    i < pokemons.length - 1;
    i += 2
  ) {

    const matchDate =
      generateRandomDate();

    matches.push({

      pokemon1: pokemons[i],

      pokemon2: pokemons[i + 1],

      hour: generateRandomHour(),

      rawDate: matchDate,

      date:
        matchDate.toLocaleDateString(
          "en-US",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }
        )

    });

  }

  matches.sort(
    (a, b) => a.rawDate - b.rawDate
  );

  return (

    <div className='matches-container'>

      {matches.map((match, index) => (

        <div
          key={index}
          className='match-card'
        >

          <div className='pokemon-side'>

            <img
              src={match.pokemon1.image}
              alt={match.pokemon1.name}
            />

            <h3 className='pokemon-name'>
              {match.pokemon1.name}
            </h3>

          </div>

          <div className='match-center'>

            <h2>VS</h2>

            <p>{match.date}</p>

            <p>{match.hour}</p>

          </div>

          <div className='pokemon-side'>

            <img
              src={match.pokemon2.image}
              alt={match.pokemon2.name}
            />

            <h3 className='pokemon-name'>
              {match.pokemon2.name}
            </h3>

          </div>

        </div>

      ))}

    </div>

  );
};