import React from 'react';
import { useParams } from 'react-router';

const Country = () => {
  const { country } = useParams();
  console.log(country);
  return <p>{country}</p>;
};

export default Country;
