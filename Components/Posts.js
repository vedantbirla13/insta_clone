import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Post from './Post'



const Posts = () => {

    const [postsData , setPostsData] = useState([]);

    useEffect(
        () => 
           onSnapshot(
               query(collection(db , 'posts') ,orderBy('timestamp' , 'desc')) , 
                (snapshot) => {
                    setPostsData(snapshot.docs);
            }
        ),
        [db]
    );

    return (
        <div>
            {
                postsData.map((post) => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        username={post.data().username}
                        userImg= {post.data().profileImg}
                        img={post.data().image}
                        caption={post.data().caption}
                    />
                ))
            }
        </div>
    )
}

export default Posts
