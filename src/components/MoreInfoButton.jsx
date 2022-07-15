import React from 'react';

export default function MoreInfoButton({ text }) {
    if(text === 'unknown') return;
    return <button className='btn btn-outline-primary btn-sm mt-2 me-1'>{text}</button>;
}
