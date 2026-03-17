import React from 'react';
import './App.scss';
import SumN from './components/Sum/Sum';

export const App = () => (
  <>
    <SumN a={2} b={3} />
    <SumN a={-5} b={5} />
    <SumN a={10} />
    <SumN b={5} />
    <SumN />
  </>
);
