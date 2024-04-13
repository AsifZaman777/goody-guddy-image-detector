import { useState } from 'react';
import {  Link } from 'react-router-dom';
import goodyLogin from '../assets/goody-login.jpeg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 

    const loginlogic = (e) => {
        e.preventDefault(); // Prevent form submission

        // Perform validation (e.g., checking if email and password are not empty)
        if (email.trim() === '' || password.trim() === '') {
            alert('Please enter both email and password.');
            return;
        }

       window.location.href = '/home'; 
    };

    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${goodyLogin})`}}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl text-cyan-100 font-bold">Login Panel</h1>
                        <p className="py-6 max-w-lg text-cyan-100 font-light mb-6">Only Goody Guddy members can join the repository. If you are a member of Goody Guddy, please login. Otherwise, contact with <a className="font-bold text-blue-300" href="mailto:asifzaman3123@gmail.com">asifzaman3123@gmail.com</a></p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent bg-slate-500 backdrop backdrop-blur-md bg-opacity-30">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-light text-white">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-light text-white">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={loginlogic} className="btn btn-success">Login</button>
                                <Link to="/signup">
                                    <button className="btn btn-secondary ml-10 my-3 max-w-lg">Not a member of Goody Guddy?</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
