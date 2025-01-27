import React from 'react';
import { useParams } from 'react-router';

const Country = () => {
  const { country } = useParams();
  console.log(country);
  return (
    <div>
      <p>{country}</p>
      <p>{country}</p>
      <p>{country}</p>
      <p>{country}</p>
      <p>{country}</p>
      <p>{country}</p>
      <p>{country}</p>
      <p>{country}</p>
    </div>
  );
};

export default Country;
