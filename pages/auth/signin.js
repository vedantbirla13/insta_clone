import React from 'react';
import { getProviders , signIn as SignIntoProvider } from 'next-auth/react';
import Header from '../../Components/Header';

const signIn = ({ providers }) => {
    return (
        <>
        <Header/>
        <div className="flex flex-col justify-center items-center min-h-screen py-2 px-14text-center">
        <img className="w-80" src="/img/instagramlogo_big.png" alt="" />
        <p className="font-xs italic">This is not a real app. This is a clone.</p>
          {Object.values(providers).map((provider) => (
            <div className="mt-10" key={provider.name}>
              <button className='p-3 bg-blue-500 rounded-lg text-white'
              onClick={() => SignIntoProvider(provider.id , { callbackUrl: "/" })}>
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return  {
        props: {
            providers
        },
    };
}

export default signIn
