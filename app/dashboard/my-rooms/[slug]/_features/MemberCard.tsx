'use client'
import { MotionDiv } from '@/components/Motion/Motion'
import { Card } from '@/components/ui/card'
import { Profile } from '@/types/entities'
import { formatDate } from '@/utils/format'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Cake, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

type MemberCardProps = {
    member: Profile
    delay: number
}

export default function MemberCard({ member, delay }: MemberCardProps) {
    const t = useTranslations('Dashboard.RoomsDetails')

    const initialLetter = `${member.username ? member.username[0] : t('unknownMember')}`

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full'>
            <Link href={`/dashboard/wishlists/${member.slug}`} className='w-full'>
                <Card className='w-full p-2 flex flex-row items-center justify-between gap-2 md:hover:bg-gray-100 duration-200 border-gray-300 dark:border-gray-700 dark:md:hover:bg-gray-900'>
                    <div className='flex justify-center items-center gap-4 w-9/10'>
                        {/*<Image                
                        src={`/room_icons/icon${1}.webp`}
                        alt="Room Avatar"
                        width={70}
                        height={70}
                        classNam
                        e="rounded-lg p-2 aspect-square outline-1 outline-primary-300 bg-linear-to-tr from-secondary-100 to-primary-100"
                    />*/}
                        <Avatar className='w-17.5 h-17.5  rounded-lg border-2 overflow-hidden border-primary-300'>
                            <AvatarImage className='' src="" />
                            <AvatarFallback className='text-black font-semibold  text-3xl bg-linear-to-tr from-secondary-100 to-primary-100 dark:to-secondary-700! dark:text-white dark:from-primary-700! w-full h-full flex items-center justify-center'>{initialLetter}</AvatarFallback>
                        </Avatar>
                        <div className='min-w-0 flex-1'>
                            <h2 className='text-lg md:text-xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{member.username}</h2>
                            {member.birthday && <div className='flex items-center gap-1 justify-start text-gray-500 dark:text-gray-400'>
                                <Cake className='size-4 mb-0.5' />
                                <p className=''>{formatDate(member.birthday)}</p>
                            </div>}
                        </div>
                    </div>
                    <div>
                        <ChevronRight className='size-5 dark:text-white' />
                    </div>
                </Card>
            </Link>
        </MotionDiv>
    )
}

