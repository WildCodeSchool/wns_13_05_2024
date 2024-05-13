import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`;

export default function AddCountry() {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [emoji, setEmoji] = useState('');
  const [continent, setContinent] = useState('');

  const [addCountry] = useMutation(ADD_COUNTRY);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCountry({ 
      variables: { 
        data: {
          name: name,
          code: code,
          emoji: emoji,
          continent: continent
        }
      } 
    });
    setName('');
    setCode('');
    setEmoji('');
    setContinent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Country</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Code" value={code} onChange={(e) => setCode(e.target.value)} />
      <input type="text" placeholder="Emoji" value={emoji} onChange={(e) => setEmoji(e.target.value)} />
      <input type="text" placeholder="Continent" value={continent} onChange={(e) => setContinent(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
};
