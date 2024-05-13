import { useState } from 'react'
import { useMutation, gql } from '@apollo/client';

const ADD_CONTINENT = gql`
  mutation AddContinent($data: NewContinentInput!) {
    addContinent(data: $data) {
      name
      id
    }
  }
`;

export default function AddContinent() {
  const [addContinent] = useMutation(ADD_CONTINENT);
  const [name, setName] = useState('');
  const [id, setId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addContinent({
      variables: {
        data: {
          name: name,
          id: id
        }
      }
    });
    
    setName('');
    setId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter continent name" 
      />

      <label htmlFor="id">ID:</label>
      <input 
        type="text" 
        id="id" 
        value={id} 
        onChange={(e) => setId(e.target.value)} 
        placeholder="Enter continent ID" 
      />

      <button type="submit">Add Continent</button>
    </form>
  );
};




