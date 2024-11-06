
"use client"
import {
    useQuery,
} from '@tanstack/react-query'
import { getUsersfromNEXT } from '@/app/services/users'
import Post from '@/app/types/post';


export default function Todos() {

    const { data, error, isLoading, isError } = useQuery({
        queryKey: ['users'],
        queryFn: getUsersfromNEXT
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className=' flex justify-center text-xl flex-wrap'>
            {data.map((post:Post) => (
                <div  className="bg-white shadow-md p-4 m-4 border border-gray-200 hover:bg-gray-100 transition" 
                key={post.id}>
                    <h3>{post.user}</h3>
                    <p>{post.post}</p>
                </div>
            ))}
        </div>
    )
}
