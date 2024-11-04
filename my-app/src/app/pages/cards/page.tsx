import React from 'react'
import { getUsers } from '@/app/services/users'
import User from '@/app/types/user'
import Protofilio from '@/app/components/Protofilio'

const page = async() => {
  // const a =  await getUsers()
  const a =await getUsers()
  const arrayUsers:User[] = a.users
  console.log(arrayUsers)

  return (
    <div className=' flex justify-center text-xl flex-wrap'>
      {
        arrayUsers.map(user => (
          <Protofilio {...user} key={user.id}></Protofilio>
        ))
      }
    </div>
  )
}

export default page