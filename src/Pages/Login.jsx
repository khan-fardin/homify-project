import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import logoImg from '../assets/logo.png';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../provider/AuthProvider';
import { Bounce, toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Login = () => {

    const { setUser, logIn } = use(AuthContext);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const navigate = useNavigate();

    // signup with google
    const handleGoogleSignup = e => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // If valid, show success toast
                toast.success(`Registered as ${user.displayName}`, {
                    position: "bottom-center",
                    autoClose: 1500,
                    transition: Bounce,
                });
                setUser(user);
                navigate("/");
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage || "Signup failed");
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const loginData = Object.fromEntries(formData.entries());
        const { email, password } = loginData;

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                toast.success(`Registered as ${user.displayName}`, {
                    position: "bottom-center",
                    autoClose: 1500,
                    transition: Bounce,
                });
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage);
                setError(errorCode);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <Link to='/' className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-8 h-8 mr-2" src={logoImg} alt="logo" />
                        HomiFy
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login to your account
                            </h1>
                            {/* Google */}
                            <button onClick={handleGoogleSignup} className="btn bg-white text-black border-[#e5e5e5] w-full">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <div className='flex items-center gap-3 opacity-70'>
                                <div className='border-b-2 w-full'></div>
                                <p>or</p>
                                <div className='border-b-2 w-full'></div>
                            </div>
                            {/* email,pass login */}
                            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                </div>
                                <div>
                                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                        </div>
                                    </div>
                                    <a href="" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet? <Link to='/signup' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;