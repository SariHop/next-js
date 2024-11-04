import React from 'react'
import { getUsersById } from '@/app/services/users'
import CardProps from '@/app/types/cardProps'
import Protofilio from '@/app/components/Protofilio'

const page = async (props: CardProps) => {
    
    const { id } = await props.params
    const user = await getUsersById(id)

    return (
        <div className=' flex justify-center text-xl flex-wrap'>
            {
                <Protofilio {...user}></Protofilio>
            }
        </div>
    )
}

export default page