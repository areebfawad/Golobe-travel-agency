import React from 'react';
import group from '../assets/logo-icon/Group.png';
import banner from '../assets/banner/signupbanner.jpg';
import SignupForm from '../Components/SignupForm';
import { Link } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';

function Signup() {
    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
            // Handle successful authentication (e.g., redirect or update UI)
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    return (
        <section id="formSignup" className='w-[95%] text-[#112211] flex gap-10 m-auto mt-6 justify-center min-h-[700px]'>
            <div id="carouselSignup" className='w-1/3 h-[650px] bg-black rounded-[30px]'>
                {/* Optional carousel or other content */}
            </div>
            <div id='fullFormContainer' className='w-3/5 '>
                <Link to={'/'}>
                    <img src={group} className='h-9 mt-5' alt="" />
                </Link>
                <SignupForm handleGoogleSignIn={handleGoogleSignIn} />
                
                <div className='flex w-[85%] justify-center'>
                    <p className='font-semibold w-[300px] text-center mt-6'>
                        Already have an account? <Link to={'/Login'} className='text-[#FF8682]' >Login</Link>
                    </p>
                </div>
                
            </div>
        </section>
    );
}

export default Signup;
