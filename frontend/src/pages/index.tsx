import React from 'react';
import CountryCard from '@/components/CountryCard';
import AddCountryInput from '@/components/AddCountry';


export default function Home() {
  return <h1>Hello, wilder !
    <AddCountryInput />
    <CountryCard />
  </h1>;
}
