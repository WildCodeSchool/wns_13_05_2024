import { useQuery, gql } from '@apollo/client';
import { Continent } from '@/types';

const COUNTRIES = gql`
  query Countries {
    countries {
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

export default function CountryCard() {
  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Voici les différents pays</h2>
      <div className="country-card-container">
        {data.countries.map((country: { id: string; code: string; name: string; emoji: string; continent: Continent }) => (
          <div key={country.id} className="country-card">
            <h3>{country.name}</h3>
            <p>Code: {country.code}</p>
            <p>Emoji: {country.emoji}</p>
            <p>Continent: {country.continent.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
