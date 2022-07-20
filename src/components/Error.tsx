import React from 'react';
// FIXME: SVG error
import error404 from '../svg/404.svg';
import { TEXT_ERROR } from '../const';

export default function Error() {
  return (
    <div>
      <h3>
        { TEXT_ERROR }
      </h3>
      <img
        src={error404}
        alt="Characters are loading"
        className="error-404 mt-3 mb-3"
      />
    </div>
  );
}
