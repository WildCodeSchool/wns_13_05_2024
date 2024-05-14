import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
import Countryard from '../components/CountryCard';
import { Country } from '../types/countryType';
import CountryCard from '../components/CountryCard';

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
      }
      }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading)  return <p>Loading...</p>;
  if(error) return <p>Error :</p>;

  return (
    <div>
    <header className="bg-pink color-white">
      <h1>Checkpoint Countries</h1>
    </header>
    <main>
      {data.countries.map((country: Country) => (
        <Link key={country.code} href={`/country/${country.code}`}>
          <a>
            <CountryCard country={country} continent={{
              id: 0,
              name: ''
            }} />
          </a>
          </Link>
      ))}
    </main>
    </div>
  );
};
