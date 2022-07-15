import React from 'react';
import error404 from '../svg/404.svg'
import { textError } from '../const';

export default function Error() {
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
