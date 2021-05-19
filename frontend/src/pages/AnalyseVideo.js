import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';

function AnalyseVideo(){
    
    const [ subscription, setSubscription ] = useState('none');
    const { user, setUser } = useContext(UserContext);


    useEffect( () => {
        console.log(JSON.stringify(user.id,null,2));
    },[])



    return (
        <div>
        </div>
    );
}

export default AnalyseVideo;