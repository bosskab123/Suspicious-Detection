import { useContext, useState } from 'react';
import firebase from '../firebase';
import { UserContext } from '../contexts/UserContext';
import { useForm } from 'react-hook-form';
import './Login.css';

function Login(){
    const { register, handleSubmit } = useForm();
    const { user, setUser } = useContext(UserContext);
    const [ account, setAccount ] = useState({id:null,password:null});
    const [ status, setStatus ] = useState(false);
    const ref = firebase.firestore.CollectionReference('users');

    const handleLogin = (data) => {
        // Check id, password
        
        // successfully login
        
        // failed to login
        

        console.log(data);
        setUser({...data, id: data.username});

    }
    return (
        <div className='page'>
            <div className='frame'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='frame-box'>
                        <span className='frame-box-head'>Username</span>
                        <input className='frame-input' name='username' type='text' {...register('username' , {required : true})}/>
                    </div>
                    <div className='frame-box'>
                        <span className='frame-box-head'>Password</span>
                        <input className='frame-input' name='password' type='password' {...register('password' , {required : true})}/>
                    </div>
                    <input className='frame-submit' type='submit' value='Login'/>
                </form>
            </div>
        </div>
    );
}

export default Login;