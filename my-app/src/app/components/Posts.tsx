import React from 'react'
import { getUsersfromNEXT } from '@/app/services/users'
import Post from '@/app/types/post'

const page = async () => {

    const arrayposts: Post[] = await getUsersfromNEXT()

    return (
        <div className=' flex justify-center text-xl flex-wrap'>
            {
                arrayposts.map(post => (
                    <p
                        key={post.id}
                        className="bg-white shadow-md p-4 m-4 border border-gray-200 hover:bg-gray-100 transition"
                    >
                       {post.post} 
                    </p>
                ))
            }
        </div>
    )
}

export default page