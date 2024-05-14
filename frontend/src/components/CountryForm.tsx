import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_COUNTRY, GET_CONTINENTS } from '../graphql/client';

export default function CountryForm(){
  const [countryData, setCountryData] = useState<{ code: string; name: string; emoji: string; continent: string }>({ code: '', name: '', emoji: '', continent: '' });
  const { loading, data } = useQuery(GET_CONTINENTS);
  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_CONTINENTS }]
  });

  const handleAddCountry = () => {
    addCountry({ variables: { data: countryData } });
  };

  return (
    <div>
      <h2>Ajouter un pays</h2>
      <input type="text" placeholder="Code" onChange={(e) => setCountryData({ ...countryData, code: e.target.value })} />
      <input type="text" placeholder="Nom" onChange={(e) => setCountryData({ ...countryData, name: e.target.value })} />
      <input type="text" placeholder="Emoji" onChange={(e) => setCountryData({ ...countryData, emoji: e.target.value })} />
      <select onChange={(e) => setCountryData({ ...countryData, continent: e.target.value })}>
        {data && data.continents.map((continent: any) => (
          <option key={continent.id} value={continent.name}>{continent.name}</option>
        ))}
      </select>
      <button onClick={handleAddCountry}>Ajouter</button>
    </div>
  );
};


