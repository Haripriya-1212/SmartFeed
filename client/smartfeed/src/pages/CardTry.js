import React from 'react';
import Card from '../component/Card';
import MinimalComponent from '../component/MinimalComp';

export default function CardTry() {
  return (
    <div className='display-card'>
      <Card />
      <Card />
      <Card />
      {/* <MinimalComponent/> */}
    </div>
  );
}
