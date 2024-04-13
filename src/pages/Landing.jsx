import goody from '../assets/goody.jpeg';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${goody})`}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-l absolute inset-10 flex justify-center">
                        <div className="text-white">
                            <h1 className="mb-6 text-6xl font-bold">Goody Guddy Image Repository</h1>
                            <ul className="text-1xl space-y-2 text-center font-light">
                                <li>Collaborative image sharing platform</li>
                                <li>All the registered members can upload images</li>
                                <li>Integrated machine learning model can assist to detect faces</li>
                            </ul>
                            <br/>
                            <Link to="/login">
                            <button className="btn btn-primary">Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
