'use client'
import Button from '@/components/Button/Button'
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { formatPrice, formatPriority } from '@/utils/format'
import { Separator } from '@radix-ui/react-separator'
import Link from 'next/link'
import { prioritiesMap } from './utils'
import { MotionDiv } from '@/components/Motion/Motion'
import { Item, Profile } from '@/types/entities'

type ItemDetailsDrawerProps = {
	item: Item | null
	currentUser: Profile
	isOpen: boolean
	onClose: () => void
	onOpenCancelReservation: () => void
}

export default function ItemDetailsDrawer({ item, currentUser, isOpen, onClose, onOpenCancelReservation }: ItemDetailsDrawerProps) {

	const PriorityIcon = item?.priority ? prioritiesMap[item.priority].el : prioritiesMap[1].el;
	const userGiverId = item?.reservations?.user_id
	const userGiverName = userGiverId ? item?.reservations?.profile?.username : 'alguém (anônimo)'

	if (!item) return null

	return (
		<Drawer open={isOpen} onClose={onClose}>
			<DrawerContent className="bg-white max-h-[80vh]! ">
				<div className="overflow-y-auto overflow-x-hidden">
					<DrawerHeader className='flex flex-col gap-2 items-center justify-center p-0 '>
						<DrawerTitle className="text-xl md:text-3xl font-semibold px-2 truncate max-w-11/12 md:max-w-2xl">{item.name}</DrawerTitle>
						<Separator orientation="horizontal" className="mb-2 bg-primary-100 w-3/5 md:w-1/5 h-1 rounded-2xl" />
					</DrawerHeader>
					<div className="p-4 w-full flex flex-col justify-center items-center gap-4">
						<div className='max-w-xl w-full flex flex-col gap-2 items-center justify-center text-center'>
							<div className='w-full flex bg-gray-100 px-4 pt-2 pb-4 rounded-lg flex-col gap-2 items-center justify-start overflow-y-auto max-h-32'>
								<h3 className='text-gray-500 font-semibold'>Observações</h3>
								<p className={item.notes ? 'text-gray-500 wrap-anywhere' : 'text-gray-400'}>{item.notes || 'Sem informações...'}</p>
							</div>
							<div className='w-full my-8 fle'>
								<div className='flex justify-between items-center gap-2 border-b-gray-200 border-b pb-2 mb-2'>
									<p className='text-gray-500 font-semibold'>Preço</p>
									<p className='text-gray-500'>R$ {formatPrice(item.price)}</p>
								</div>
								<div className='flex justify-between items-center gap-2 border-b-gray-200 border-b pb-2 mb-2'>
									<p className='text-gray-500 font-semibold'>Prioridade</p>
									<div className={`flex items-center gap-1 text-gray-500 ${prioritiesMap[item.priority].color} ${prioritiesMap[item.priority].bg} rounded-full px-3 py-1`}>
										<PriorityIcon className='size-4' />
										<p>{formatPriority(item.priority)}</p>
									</div>
								</div>
								{item.reservations && <div className='flex justify-center my-4 p-4 items-center gap-2 bg-primary-50 rounded-lg'>
									{currentUser.id !== item.reservations.user_id ?
										<MotionDiv
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5 }}
											className='flex items-center gap-1 flex-wrap justify-center text-sm md:text-base  font-semibold w-full'>
											<p className='text-gray-600 '>Este item já foi reservado por</p>
											<p className='text-gray-600 truncate '>{userGiverName}</p>
										</MotionDiv>
										:
										<MotionDiv
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.5 }}
											className='flex items-center gap-2 flex-col text-sm md:text-base  font-semibold'>
											<p className='text-gray-600 '>Este item foi reservado por você</p>
											<Button onClick={onOpenCancelReservation} variant='outlined' className='w-full rounded-full'>Remover reserva</Button>
										</MotionDiv>
									}
								</div>}
								<div className='flex justify-center items-center w-full mt-8'>
									{item.link.length > 0 ?
										<Link href={item.link} target="_blank" className='w-full'>
											<Button className='w-full rounded-full py-4' variant='contained'>Abrir link</Button>
										</Link> :
										<Button className='w-full border-2 py-4! border-gray-200 rounded-full' variant='blank' disabled>Link não informado</Button>
									}
								</div>
							</div>

						</div>
					</div>

				</div>
			</DrawerContent>
		</Drawer>
	)
}
