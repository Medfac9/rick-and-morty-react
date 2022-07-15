import React from 'react';
import error404 from '../svg/404.svg'

export default function Error() {
    const textError = 'We have not been able to find any character with your search and filters, try again.'
    return (
        <div>
            <h3>
                { textError }
            </h3>
            <img 
                src={error404} 
                alt='Characters are loading' 
                className='error-404 mt-3 mb-3' 
            />
        </div>
    );
}
