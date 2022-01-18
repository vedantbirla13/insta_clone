import React from 'react';
import data from '../Components/data';
import Story from '../Components/Story';
import { useSession } from 'next-auth/react';


const Stories = () => {
    const {data:session} = useSession();

    return (
        <div className='flex space-x-2 p-6 bg-white mt-6 border-gray-200 border rounded-sm 
        overflow-x-scroll scrollbar-thumb-black scrollbar-thin mx-auto '>
        {session && (
            <Story 
                img={session.user.image} name={session?.user?.username}
            />
        )}
            {
              data.map((profile) => (
                    <Story  
                        key={profile.id}
                        img={profile.avatar}
                        name={profile.name}
                     />
              ))
            }
  
        </div>
    )
}

export default Stories
