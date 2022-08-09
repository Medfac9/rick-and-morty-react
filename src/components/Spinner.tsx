import React from 'react';
// FIXME: SVG error
import spinnerIcon from '../svg/spinner.svg';

export default function Spinner() {
  return (
    <img
      src={spinnerIcon}
      alt="Characters are loading"
      className="spinner"
    />
  );
}
