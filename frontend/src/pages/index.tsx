import React from 'react';
import CountryCard from '@/components/CountryCard';


export default function Home() {
  return (
    <div>
  <h1>Hello, wilder !</h1>;
  <CountryCard country={{
        id: 0,
        code: '',
        name: '',
        emoji: '',
        continent: {
          id: 0,
          name: ''
        }
      }} continent={{
        id: 0,
        name: ''
      }} />
  </div>
  )
}
