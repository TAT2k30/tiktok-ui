import React from 'react';
import myAlert from '~/myAlert';
function Button(props) {
    return (
        <div>
            <button onClick={myAlert}>Click me</button>
        </div>
    );
}

export default Button;