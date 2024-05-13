// components/CountryDetails.tsx
import React from 'react';
import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';

const COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      name
      code
      emoji
      continent {
        name
      }
    }
  }
`;

export default function CountryDetails() {
  const router = useRouter();
  const { code } = router.query;
  const { loading, error, data } = useQuery(COUNTRY, {
    variables: { code: code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data.country;

  return (
    <div>
      <h2>Country Details</h2>
      <p>Name: {country.name}</p>
      <p>Code: {country.code}</p>
      <p>Emoji: {country.emoji}</p>
      {country.continent && <p>Continent: {country.continent.name}</p>}
    </div>
  );
};

