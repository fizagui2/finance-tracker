import React, {useContext} from 'react';
import {FcGoogle} from 'react-icons/fc';
import { contextForAuth } from '@/lib/store/authContext';


function SignIn() {
    const {googleLoginHandler} = useContext(contextForAuth);
    return(
        <main className="container max-w-2xl px-6 mx-auto">
            <h1 className="mb-6 text-6xl font-bold text-center text-black">Welcome! 💰💵💲</h1>

            <div className="flex flex-col overflow-hidden shadow-md shadow-slate-500 bg-slate-800 rounded-2xl">

                <div className="h-52">
                    <img className="object-cover w-full h-full"
                    src="images/signInImage.png"/>
                </div>

                <div className="px-4 py-2.5">
                    <h3 className="text-2xl text-center">Please sign in to continue</h3>

                    <button onClick={googleLoginHandler} className="flex self-start gap-2 p-4 mx-auto mt-6 font-medium text-white align-middle bg-gray-700 rounded-lg">
                        <FcGoogle className="text-2xl"/>Google
                    </button>
                </div>
            </div>
        </main>
    );
}

export default SignIn;