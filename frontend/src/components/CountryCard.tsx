import { Country } from '../types/countryType';
import { Continent } from '../types/continentType';

export type CardProps = {
    country: Country;
    continent: Continent;
}

export default function CountryCard({ country, continent }: CardProps) {
    return (
        <div className=" border-1px solid #ccc p-10px m-10px border-radius-5px maxWidth-300px">
            <h2>{country.name}</h2>
            <p>{country.code}</p>
            <p>{country.emoji}</p>
            <p>{continent.name}</p>
        </div>
    );
}