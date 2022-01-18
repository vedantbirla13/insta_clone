import React from 'react'
import data from './data'

const Suggestions = () => {
    return (
        <div className="mt-4 ml-10">

            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-gray-400" >Suggestions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
                {
                    data.slice(0,5).map((profile) => (
                            <div key={profile.id} className=" flex justify-between mt-3 " >
                                    <img  
                                    className="w-10 h-10 rounded-full border p-[2px] object-contain" 
                                    src={profile.avatar} 
                                    alt=""
                                    />

                                 <div className="flex-1 ml-4">
                                    <h2 className="font-semibold text-sm">{profile.name}</h2>
                                    <h3 className="text-gray-400 text-xs">Lives at {profile.address}</h3>
                                 </div>  

                                 <button className="text-blue-400 font-bold">Follow</button> 
                            </div>
                ))
                }
        </div>
    )
}

export default Suggestions
