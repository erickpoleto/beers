import React from 'react';
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import './styles.css'
export default function SimpleRating() {

  return (
    <div>
        <Rater total={5} rating={2} />
    </div>
  );
}