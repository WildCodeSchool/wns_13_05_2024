import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_CONTINENT, GET_CONTINENTS } from '../graphql/client';

export default function ContinentForm() {
  const [continentData, setContinentData] = useState<{ name: string }>({ name: '' });
  const [addContinent] = useMutation(ADD_CONTINENT, {
    refetchQueries: [{ query: GET_CONTINENTS }]
  });

  const handleAddContinent = () => {
    addContinent({ variables: { data: continentData } });
  };

  return (
    <div>
      <h2>Ajouter un continent</h2>
      <input type="text" placeholder="Nom" onChange={(e) => setContinentData({ ...continentData, name: e.target.value })} />
      <button onClick={handleAddContinent}>Ajouter</button>
    </div>
  );
};


