'use client'
import { LoaderCircle, Meh, SearchX } from 'lucide-react'
import Input from '@/components/Input/Input'
import { MotionDiv } from '@/components/Motion/Motion'
import MemberCard from './MemberCard'
import { Profile } from '@/types/entities'
import { useTranslations } from 'next-intl'

type MembersListProps = {
  search: string
  setSearch: (search: string) => void
  isLoading: boolean
  members: { members: Profile[], count: number }
}

export default function MembersList({ members, search, setSearch, isLoading }: MembersListProps) {
  const t = useTranslations('Dashboard.RoomsDetails');

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, bounce: 0.4, type: 'spring' }}
      className='w-full flex flex-col gap-2'>

      <Input
        className='w-full mb-2'
        variant='secondary'
        name='search-members'
        placeholder={t('searchPlaceholder')}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading ? (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-500 animate-pulse'>
          <LoaderCircle className='size-10 animate-spin mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>{t('ListResponses.loading')}</p>
        </div>
      ) : members.members.length > 0 ? (
        <div className='w-full flex flex-col gap-2'>
          {members.members.map((member, index) => (
            <MemberCard key={member.id} member={member} delay={index * 0.1} />
          ))}
        </div>
      ) : members.count > 0 ? (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
          <SearchX className='size-10 mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>{t('ListResponses.emptyState')}</p>
          <p className='text-sm md:text-base'>{t('ListResponses.emptyStateDescription')}</p>
        </div>

      ) : (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
          <Meh className='size-10 mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>Esse grupo parece estar vazio</p>
          <p className='text-sm md:text-base'>Compartilhe o link de convite com seus amigos!</p>
        </div>
      )
      }
    </MotionDiv>
  )
}

