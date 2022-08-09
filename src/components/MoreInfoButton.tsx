import React from 'react';
import { TextButton } from './interface';

export default function MoreInfoButton({ text }: TextButton) {
  return (
    <button type="button" className="btn btn-outline-primary btn-sm mt-2 me-1">
      {text}
    </button>
  );
}
