import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../pages/config.js'; // Assuming you have imported 'auth' from your firebase configuration

import goody1 from '../assets/goody-signup.jpeg';
import goody2 from '../assets/goody.jpeg';
import goody3 from '../assets/goody-signup.jpeg';
import goody4 from '../assets/goody.jpeg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const images = [goody1, goody2, goody3, goody4];

    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    // Prevent user from going back to the login page after logging in
    useEffect(() => {
        window.history.pushState(null, null, location.href);
        window.onpopstate = function () {
            window.history.go(1);
        };
    }, []);

    const loginLogic = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('User logged in:', user);
                localStorage.setItem('email', email);
                navigate('/dashboard');
            })
            .catch((error) => {
                setError(error.message);
                console.error('Error signing in:', error);
            });
    };

    const heroStyle = {
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        transition: 'background-image 0.5s ease-in-out',
        backgroundImage: `url(${images[currentImage]})`
    };

    return (
        <div>
            <div className="hero" style={heroStyle}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content flex-col lg:flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl text-cyan-100 font-bold">Login Panel</h1>
                        <p className="py-6 max-w-lg text-cyan-100 font-light mb-6">
                            Only Goody Guddy members can join the repository. If you are a member of Goody Guddy, please login. Otherwise, contact with <a className="font-bold text-blue-300" href="mailto:asifzaman3123@gmail.com">asifzaman3123@gmail.com</a>
                        </p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-transparent bg-slate-800 backdrop backdrop-blur-sm bg-opacity-30">
                        <form className="card-body" onSubmit={loginLogic}>
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
                            {error && <div className="text-red-600">{error}</div>}
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
