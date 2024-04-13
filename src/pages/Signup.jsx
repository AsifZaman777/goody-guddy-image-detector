import goodySignup from '../assets/goody-signup.jpeg';

const Signup = () => {
  return (
    <div>
    <div className="hero min-h-screen" style={{backgroundImage: `url(${goodySignup})`}}>
    <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content flex-col lg:flex-col">
            <div className="text-center">
                <h1 className="text-4xl inset-10 absolute text-cyan-800 font-medium">Register to join!</h1>
               
            </div>
            <div className="flex absolute inset-20 card shrink-0 w-full max-w-sm shadow-2xl bg-transparent bg-slate-700 backdrop backdrop-blur-sm bg-opacity-30">

                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-light text-white">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-light text-white">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-light text-white">Area</span>
                        </label>
                        <input type="text" placeholder="Mirpur-13" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-light text-white">Phone</span>
                        </label>
                        <input type="text" placeholder="017XXXXXXXX" className="input input-bordered" required />
                    </div>
                    
                    <div className="form-control mt-20">
                        <button className="btn btn-success">Register for Goody-Guddy</button>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
       
  );
};

export default Signup;
