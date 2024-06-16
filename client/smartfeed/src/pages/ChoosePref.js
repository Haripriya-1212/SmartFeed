import React from 'react'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

export default function ChoosePref() {
    const [submit, setSubmit] = useState(false);
    function submitPref(){
        setSubmit(true);
    }
    if(submit){
        return <Navigate to={'/login'} />
    }
    return (
    <div>
        ChoosePref
        <button onClick={submitPref}>Continue</button>
    </div>
  )
}
