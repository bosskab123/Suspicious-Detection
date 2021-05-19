import { useContext, useState } from 'react';
import firebase from '../firebase';
import { UserContext } from '../contexts/UserContext';
import { useForm } from 'react-hook-form';
import './Login.css';

function Login(){
    const { register, handleSubmit } = useForm();
    const { user, setUser } = useContext(UserContext);
    const { account, setAccount } = useState({id:null,password:null});
    const { status, setStatus } = useState(false);
    const ref = firebase.firestore.CollectionReference('users');

    const handleLogin = (data) => {
        // Check id, password
        
        // successfully login
        
        // failed to login
        

        console.log(data);
        setUser({id: data.username});

    }
    return (
        <div className='page'>
            <div className='frame'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <h2>Username</h2>
                    <input className='frame-input' name='username' type='text' {...register('username' , {required : true})}/>
                    <h2>Password</h2>
                    <input className='frame-input' name='password' type='password' {...register('password' , {required : true})}/>
                    <input className='frame-submit' type='submit' value='Login'/>
                </form>
            </div>
        </div>
    );
}

export default Login;