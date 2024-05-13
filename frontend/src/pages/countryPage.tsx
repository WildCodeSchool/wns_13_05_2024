// pages/[code].tsx
import React from 'react';
import { GetServerSideProps } from 'next';
import CountryDetails from '../components/CountryDetails';

export default function CountryPage({ code }: {code: string}) {
  return (
    <div>
      <h1>Country Details</h1>
      <CountryDetails code={code} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const code = params?.code as string;
  return { props: { code } };
};


