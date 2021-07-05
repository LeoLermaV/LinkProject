import React, { useState } from 'react';

interface name {
    name?:string,
}



function LoginComponent(props: name) {
    
const [ name, setName] = useState('dani');


    return (
        <div>
     
                <label > {name} </label>
                <button onClick={()=> setName('leo')} />
                <input type="text" placeholder='username'/>
                <input type="password" placeholder='password'/>

        </div>
    );
}

export default LoginComponent;