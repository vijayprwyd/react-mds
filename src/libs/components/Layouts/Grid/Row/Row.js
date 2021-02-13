import React from 'react';
import './row.scss';

export function Row({children, ...rest}) {

    return (

        <div className = 'row reverse' >

                {children}

        </div>

    )

}