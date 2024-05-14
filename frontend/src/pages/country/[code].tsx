import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';
import CardCountry from '../../components/CountryCard';


const GET_COUNTRY = gql`
    query Country($code: String!) {
        country(code: $code) {
        name
        code
        emoji
        }
    }
`;

export default function CountryPage() {
    const router = useRouter();
    const { code } = router.query;
    const { loading, error, data} = useQuery(GET_COUNTRY, {
        variables: { code },
});

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :</p>;

if (!data || data.country) {
    return <p>Country not found.</p>
}

const country = data.country;

return (
    <div>
        <header className='bg-pink color-white'>
            <h1>Checkpoint Country</h1>
        </header>
        <main>
            <CardCountry country={country} continent={{
                id: 0,
                name: ''
            }}/>
        </main>
    </div>
);
};