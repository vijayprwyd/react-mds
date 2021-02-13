import React from 'react';
import '../../screenSizes.scss';
import './col.scss';
export function Col({ xs, sm , md , lg, xl,  children, ...rest }) {
    return (
        <div className = {`xs${xs} sm${sm} md${md} lg${lg} xl${xl} col`} {...rest}>

                {children}

        </div>
    );

}