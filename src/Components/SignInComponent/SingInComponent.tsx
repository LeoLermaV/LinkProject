import React, { useState } from 'react';

interface name {
    name:string,
}


const [ name, setName] = useState('leo');

function SignInComponent(props: name) {
    return (
        <div>
            <div>{props.name}</div>
        </div>
    );
}

export default SignInComponent;