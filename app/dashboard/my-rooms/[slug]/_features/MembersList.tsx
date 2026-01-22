'use client'
import { Frown, LoaderCircle, SearchX } from 'lucide-react'
import React, { useEffect } from 'react'
import Input from '@/components/Input/Input'
import { MotionDiv } from '@/components/Motion/Motion'
import MemberCard from './MemberCard'
import { getMembersAction } from '../../../../../src/actions/roomMembers'
import { Database } from '@/types/supabase'

type MembersListProps = {
  roomId: number
}

export default function MembersList({roomId}: MembersListProps) {

    const [membersResponse, setMembersResponse] = React.useState<{members: Database['public']['Views']['public_profiles']['Row'][], count: number}>({members: [], count: 0})
    const [search, setSearch] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(()=>{
        const fetchMembersData = async () => {
        setIsLoading(true)
        const response = await getMembersAction(search, roomId)
        
        if (response.success) {
            setMembersResponse(response.data)
        } else {
            setMembersResponse({members: [], count: 0})
        }
        setIsLoading(false)
        
    }

    const delayDebounceFn = setTimeout(() => {
      fetchMembersData()
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [search])

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, bounce: 0.4, type: 'spring' }}
      className='w-full flex flex-col gap-2'>

    <Input className='w-full mb-2' variant='secondary' name='search-members' placeholder='Buscar participantes...' onChange={(e)=>setSearch(e.target.value)} />
      
      {isLoading ? (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-500 animate-pulse'>
          <LoaderCircle className='size-10 animate-spin mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>Carregando participantes...</p>
        </div>
      ) : membersResponse.members.length > 0 ? (
        <div className='w-full flex flex-col gap-2'>
          {membersResponse.members.map((member, index) => (
            <MemberCard key={member.id} member={member} delay={index * 0.1} />
          ))}
        </div>
      ) : membersResponse.count > 0 ?(
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
          <SearchX className='size-10 mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>Nenhum participante encontrado</p>
          <p className='text-sm'>Tente buscar por outro nome ou convide mais pessoas.</p>
        </div>
        
      ): (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
          <Frown className='size-10 mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>Esse grupo parece estar vazio</p>
          <p className='text-sm'>Compartilhe o link de convite com seus amigos!</p>
        </div>
        )
        }
    </MotionDiv>
  )
}
