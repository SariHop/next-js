import React from 'react'
import User from '@/app/types/user'
import Protofilio from '@/app/components/Protofilio'
import { getUsersById } from '@/app/services/users'

const singleUser: User = await getUsersById("1")
  

const page = () => {
  return (
    <div className=' flex justify-center text-xl'>
       <Protofilio {...singleUser} />
    </div>
  )
}

export default page