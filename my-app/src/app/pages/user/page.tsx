import React from 'react'
import User from '@/app/types/user'
import Protofilio from '@/app/components/Protofilio'

const singleUser: User = {
  id: -1,
  username: "BIBI",
  image: "/avatar.png",
  university: "Harvard"
}

const page = () => {
  return (
    <div className=' flex justify-center text-xl'>
       <Protofilio {...singleUser} />
    </div>
  )
}

export default page